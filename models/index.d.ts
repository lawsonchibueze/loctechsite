import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

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



type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly isFeatured?: boolean | null;
  readonly image?: string | null;
  readonly category?: string | null;
  readonly tags?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly isFeatured?: boolean | null;
  readonly image?: string | null;
  readonly category?: string | null;
  readonly tags?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerHero = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hero, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly smallText?: string | null;
  readonly mediumText?: string | null;
  readonly largeText?: string | null;
  readonly buttonText?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHero = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hero, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly smallText?: string | null;
  readonly mediumText?: string | null;
  readonly largeText?: string | null;
  readonly buttonText?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Hero = LazyLoading extends LazyLoadingDisabled ? EagerHero : LazyHero

export declare const Hero: (new (init: ModelInit<Hero>) => Hero) & {
  copyOf(source: Hero, mutator: (draft: MutableModel<Hero>) => MutableModel<Hero> | void): Hero;
}

type EagerInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Instructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly facebook?: string | null;
  readonly linkedin?: string | null;
  readonly rating?: string | null;
  readonly review?: string | null;
  readonly Courses?: (InstructorCourse | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Instructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly facebook?: string | null;
  readonly linkedin?: string | null;
  readonly rating?: string | null;
  readonly review?: string | null;
  readonly Courses: AsyncCollection<InstructorCourse>;
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
  readonly image?: string | null;
  readonly video?: string | null;
  readonly category: Category | keyof typeof Category;
  readonly duration?: number | null;
  readonly learningObjective?: (string | null)[] | null;
  readonly level?: Level | keyof typeof Level | null;
  readonly curriculum?: (string | null)[] | null;
  readonly isFeatured: boolean;
  readonly instructors?: (InstructorCourse | null)[] | null;
  readonly headDescription?: string | null;
  readonly headTitle?: string | null;
  readonly headContent?: string | null;
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
  readonly instructors: AsyncCollection<InstructorCourse>;
  readonly headDescription?: string | null;
  readonly headTitle?: string | null;
  readonly headContent?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Course = LazyLoading extends LazyLoadingDisabled ? EagerCourse : LazyCourse

export declare const Course: (new (init: ModelInit<Course>) => Course) & {
  copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}

type EagerInstructorCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InstructorCourse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly instructorId?: string | null;
  readonly courseId?: string | null;
  readonly instructor: Instructor;
  readonly course: Course;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInstructorCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InstructorCourse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly instructorId?: string | null;
  readonly courseId?: string | null;
  readonly instructor: AsyncItem<Instructor>;
  readonly course: AsyncItem<Course>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type InstructorCourse = LazyLoading extends LazyLoadingDisabled ? EagerInstructorCourse : LazyInstructorCourse

export declare const InstructorCourse: (new (init: ModelInit<InstructorCourse>) => InstructorCourse) & {
  copyOf(source: InstructorCourse, mutator: (draft: MutableModel<InstructorCourse>) => MutableModel<InstructorCourse> | void): InstructorCourse;
}