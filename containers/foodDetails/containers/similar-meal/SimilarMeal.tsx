import React from 'react'
import styles from "./similar-meal.module.css"
import { FirstSimilarMeal } from './FirstSimilarMeal';
import { SecondSimilarMeal } from './SecondSimilarMeal';

interface SimilarMealProps {
  id: string;
}

export const SimilarMeal: React.FC<SimilarMealProps> = ({ id }) => {
  return (
    <section className="mostsold_container">
      <FirstSimilarMeal id={id} />
      <SecondSimilarMeal id={id} />
    </section>
  );
};
