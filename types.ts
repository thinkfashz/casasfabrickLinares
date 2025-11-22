import { ReactNode } from 'react';

export interface SectionHeadingProps {
  pre: string;
  title: string;
  subtitle: string;
  center?: boolean;
}

export interface SkillBarProps {
  label: string;
  icon: ReactNode;
  index: number;
}

export interface ComparisonRowProps {
  feature: string;
  bad: string;
  good: string;
  index: number;
}

export interface FAQItemProps {
  question: string;
  answer: string;
}

export interface Stage {
  label: string;
  percent: number;
  detail: string;
}

export interface ChartData {
  category: string;
  value: number;
  color: string;
}

export interface TimelineEventProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
  isLast?: boolean;
}