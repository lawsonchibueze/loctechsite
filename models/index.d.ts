import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Category {
  AUTOCAD = "AUTOCAD",
  DATA_SCIENCE = "DATA_SCIENCE",
  WEB_DEVELOPMENT = "WEB_DEVELOPMENT",
  CREATIVE_GRAPHICS_DESIGN = "CREATIVE_GRAPHICS_DESIGN",
  OFFICE_PRODUCTIVITY = "OFFICE_PRODUCTIVITY",
  SECURITY = "SECURITY",
  CLOUD_COMPUTING = "CLOUD_COMPUTING",
  PROJECT_MANAGEMENT = "PROJECT_MANAGEMENT",
  NETWORKING = "NETWORKING",
  PROGRAMMING = "PROGRAMMING",
  DIGITAL_MARKETING = "DIGITAL_MARKETING",
  FINANCE_ACCOUNTING = "FINANCE_ACCOUNTING"
}

export enum Level {
  FOUNDATION = "FOUNDATION",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCE = "ADVANCE"
}



type EagerCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Course, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly descriptions: string;
  readonly price: number;
  readonly excerpt: string;
  readonly image?: string | null;
  readonly video?: string | null;
  readonly category: Category | keyof typeof Category;
  readonly duration?: number | null;
  readonly learningObjective?: (string | null)[] | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly curriculum?: (string | null)[] | null;
  readonly isFeatured: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Course, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly descriptions: string;
  readonly price: number;
  readonly excerpt: string;
  readonly image?: string | null;
  readonly video?: string | null;
  readonly category: Category | keyof typeof Category;
  readonly duration?: number | null;
  readonly learningObjective?: (string | null)[] | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly curriculum?: (string | null)[] | null;
  readonly isFeatured: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Course = LazyLoading extends LazyLoadingDisabled ? EagerCourse : LazyCourse

export declare const Course: (new (init: ModelInit<Course>) => Course) & {
  copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}