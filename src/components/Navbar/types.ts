import type { LucideIcon } from "lucide-react";

export type PanelId =
  | "products"
  | "industries"
  | "solutions"
  | "useCases"
  | "features";

export interface PlainNavItem {
  label: string;
  href: string;
}

export interface DropdownNavItem {
  label: string;
  panelId: PanelId;
}

export type NavItem = PlainNavItem | DropdownNavItem;

export interface ProductNavEntry {
  name: string;
  tagline: string;
  icon: LucideIcon;
  href: string;
}

export interface SolutionNavEntry {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface IndustryNavEntry {
  label: string;
  href: string;
}

export interface UseCaseNavEntry {
  label: string;
  href: string;
}

export const isDropdownItem = (item: NavItem): item is DropdownNavItem =>
  "panelId" in item;
