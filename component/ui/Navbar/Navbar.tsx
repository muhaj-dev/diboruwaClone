"use client";
import styled from "styled-components";
import { routes } from "@/constants";
import { assets } from "@/public/assets";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { VscClose } from "react-icons/vsc";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";

import ServiceMenu from "@/component/serviceMenu";
import {
  Cta,
  LogoImage,
  MenuList,
  MobileMenu,
  MobileMenuBackdrop,
  NavbarContainer,
  Toggle,
  SMCDI,
} from "./navbar.styles";
import UserDropdown from "@/component/userDropdown/UserDropdown";
import { FaBagShopping } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { useCart } from "@/hooks/useCart";
import { useSession } from "next-auth/react";
import useCartStore from "@/store/useCart.store";

const Navbar = () => {
  const { data: session, status } = useSession({
    required: false,
  });

  //get partName to render route types
  const pathname = usePathname();

  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { cartItems, getCart, getSubscriptions, subscriptions } =
    useCartStore();

  const { totalQuantities } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Call handleScroll on initial render
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavbarContainer
      style={
        isScrolled
          ? {
              backdropFilter: "blur(20px)",
              background: "rgb(255, 255, 255)",
              borderBottom: "1px solid var(--primary-20)",
              height: "10vh",
            }
          : {}
      }
    >
      <div className="logo">
        <Link href="/" passHref>
          <LogoImage src="/logo.png" fill={true} alt="logo" />
        </Link>
      </div>
      {/* <Toggle onClick={() => setToggle((prev) => !prev)}>
        {toggle ? <VscClose /> : <HiBars3 />}
      </Toggle> */}
      <MenuList className="menu">
        {routes.map((link, index) => {
          return (
            <li key={index}>
              {link?.subroutes ? (
                <SMCDI>
                  <ServiceMenu trigger={link.name} routes={link?.subroutes} />
                  <CaretDownIcon className="icon" aria-hidden />
                </SMCDI>
              ) : (
                <Link className="link" href={link.path}>
                  {link.name}
                </Link>
              )}
            </li>
          );
        })}
      </MenuList>
      <AnimatePresence>
        {toggle && (
          <>
            <MobileMenuBackdrop
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setToggle((prev) => !prev)}
            ></MobileMenuBackdrop>
            <MobileMenu
              initial={{ right: "-100%", opacity: 0 }}
              animate={{ right: "10%", opacity: 1 }}
              exit={{ right: "-100%", opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {routes.map((link, index) => (
                <li key={index}>
                  {link.subroutes ? (
                    <>
                      <ServiceMenu
                        toggle={() =>
                          setToggle((prev) => (prev === true ? false : false))
                        }
                        trigger={link.name}
                        routes={link?.subroutes}
                      />
                    </>
                  ) : (
                    <Link
                      className="link"
                      href={link.path}
                      onClick={() =>
                        setToggle((prev) => (prev === true ? false : false))
                      }
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              {!session && (
                <li>
                  <Link className="link" href="/signin">
                    Sign In
                  </Link>
                </li>
              )}
              {!session && (
                <li>
                  <Link className="link" href="/signup">
                    Sign Up
                  </Link>
                </li>
              )}
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
      <MenuList>
        {!session && (
          <li>
            <Link
              style={{
                color: "#27A124",
              }}
              className="link"
              href="/signup"
            >
              Register
            </Link>
          </li>
        )}
        {!session && (
          <li>
            <Link
              style={{
                color: "#27A124",
              }}
              className="link"
              href="/signin"
            >
              Login
            </Link>
          </li>
        )}
        {!session && (
          <Cta href={`https://admin.diboruwa.com/sign-in`} target="_blank">
            Partner with us
          </Cta>
        )}
        {session && (
          <div className="SA_location">
            <ImLocation className="SA_location_icon" />
            <p className="SA_location_text">Tanke, Ilorin</p>
          </div>
        )}
        {session && <UserDropdown />}
        {session && (
          <div className="cart">
            {totalQuantities >= 1 ? (
              <div className="badge">{totalQuantities}</div>
            ) : (
              <></>
            )}
            <>
              <Link
                href="/cart"
                style={{ textDecoration: "none", color: "var(--primary)" }}
              >
                <FaBagShopping className="cart_icon" />
              </Link>
            </>
          </div>
        )}
      </MenuList>
    </NavbarContainer>
  );
};

export default Navbar;
