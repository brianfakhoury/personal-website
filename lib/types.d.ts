import dynamicIconImports from "lucide-react/dynamicIconImports";
import { type LucideProps } from "lucide-react";

export interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

export type Post = {
  tags: string[];
  date: Date;
  modified: Date | undefined;
  slug: string;
  origin: string | undefined;
  image: string | undefined;
  description: string;
  title: string;
  body: string;
};

export type Links = [
  {
    title: string;
    emoji: IconProps["name"];
    items: [
      {
        link: string;
        content: string;
      }
    ];
  }
];
