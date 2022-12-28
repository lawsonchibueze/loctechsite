import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Level {
  FOUNDATION = "FOUNDATION",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCE = "ADVANCE"
}

export enum CourseCategory {
  DATA_SCIENCE = "DATA_SCIENCE",
  WEB_DEVELOPMENT = "WEB_DEVELOPMENT",
  CREATIVE_GRAPHICS_DESIGN = "CREATIVE_GRAPHICS_DESIGN",
  OFFICE_PRODUCTIVITY = "OFFICE_PRODUCTIVITY",
  SECURITY = "SECURITY",
  CLOUD_COMPUTING = "CLOUD_COMPUTING",
  PROJECT_MANAGEMENT = "PROJECT_MANAGEMENT",
  NETWORKING = "NETWORKING",
  PROGRAMMING = "PROGRAMMING",
  AUTOCAD = "AUTOCAD",
  DIGITAL_MARKETING = "DIGITAL_MARKETING",
  FINANCE_ACCOUNTING = "FINANCE_ACCOUNTING"
}



type EagerInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Instructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly bio: string;
  readonly title?: string | null;
  readonly linkedin: string;
  readonly twitter: string;
  readonly image: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Instructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly bio: string;
  readonly title?: string | null;
  readonly linkedin: string;
  readonly twitter: string;
  readonly image: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Instructor = LazyLoading extends LazyLoadingDisabled ? EagerInstructor : LazyInstructor

export declare const Instructor: (new (init: ModelInit<Instructor>) => Instructor) & {
  copyOf(source: Instructor, mutator: (draft: MutableModel<Instructor>) => MutableModel<Instructor> | void): Instructor;
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
  readonly image: string;
  readonly video?: string | null;
  readonly category: CourseCategory | keyof typeof CourseCategory;
  readonly duration: number;
  readonly learning_objective?: string[] | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly curriculum?: string[] | null;
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
  readonly image: string;
  readonly video?: string | null;
  readonly category: CourseCategory | keyof typeof CourseCategory;
  readonly duration: number;
  readonly learning_objective?: string[] | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly curriculum?: string[] | null;
  readonly isFeatured: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Course = LazyLoading extends LazyLoadingDisabled ? EagerCourse : LazyCourse

export declare const Course: (new (init: ModelInit<Course>) => Course) & {
  copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}