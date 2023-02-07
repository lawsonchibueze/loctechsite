import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum TestimonialCategory {
  STUDY_ENVIRONMENT = "STUDY_ENVIRONMENT",
  TRAINING_STANDARD = "TRAINING_STANDARD",
  INSTRUCTOR = "INSTRUCTOR",
  JOB_PLACEMENT = "JOB_PLACEMENT"
}

export enum Category {
  ALL = "ALL",
  WEB_DEVELOPMENT = "WEB_DEVELOPMENT",
  DATA_SCIENCE = "DATA_SCIENCE",
  NETWORKING_SECURITY = "NETWORKING_SECURITY",
  GRAPHICS_MEDIA = "GRAPHICS_MEDIA",
  OFFICE_PRODUCTIVITY = "OFFICE_PRODUCTIVITY"
}



type EagerTestimonial = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Testimonial, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly category?: TestimonialCategory | keyof typeof TestimonialCategory | null;
  readonly Featured?: boolean | null;
  readonly Feedback?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestimonial = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Testimonial, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly category?: TestimonialCategory | keyof typeof TestimonialCategory | null;
  readonly Featured?: boolean | null;
  readonly Feedback?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Testimonial = LazyLoading extends LazyLoadingDisabled ? EagerTestimonial : LazyTestimonial

export declare const Testimonial: (new (init: ModelInit<Testimonial>) => Testimonial) & {
  copyOf(source: Testimonial, mutator: (draft: MutableModel<Testimonial>) => MutableModel<Testimonial> | void): Testimonial;
}

type EagerEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Events, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly topic?: string | null;
  readonly content?: string | null;
  readonly Image?: string | null;
  readonly totalSlot?: number | null;
  readonly facebook?: string | null;
  readonly email?: string | null;
  readonly cost?: number | null;
  readonly buttonText?: string | null;
  readonly speakers?: (string | null)[] | null;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly locationMap?: string | null;
  readonly location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Events, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly topic?: string | null;
  readonly content?: string | null;
  readonly Image?: string | null;
  readonly totalSlot?: number | null;
  readonly facebook?: string | null;
  readonly email?: string | null;
  readonly cost?: number | null;
  readonly buttonText?: string | null;
  readonly speakers?: (string | null)[] | null;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly locationMap?: string | null;
  readonly location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Events = LazyLoading extends LazyLoadingDisabled ? EagerEvents : LazyEvents

export declare const Events: (new (init: ModelInit<Events>) => Events) & {
  copyOf(source: Events, mutator: (draft: MutableModel<Events>) => MutableModel<Events> | void): Events;
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
  readonly author?: string | null;
  readonly date?: string | null;
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
  readonly author?: string | null;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerHeroData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HeroData, 'id'>;
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

type LazyHeroData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HeroData, 'id'>;
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

export declare type HeroData = LazyLoading extends LazyLoadingDisabled ? EagerHeroData : LazyHeroData

export declare const HeroData: (new (init: ModelInit<HeroData>) => HeroData) & {
  copyOf(source: HeroData, mutator: (draft: MutableModel<HeroData>) => MutableModel<HeroData> | void): HeroData;
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
  readonly image?: string | null;
  readonly video?: string | null;
  readonly category: Category | keyof typeof Category;
  readonly duration?: number | null;
  readonly learningObjective?: (string | null)[] | null;
  readonly isFeatured: boolean;
  readonly instructors?: (InstructorCourse | null)[] | null;
  readonly online?: boolean | null;
  readonly curriculum?: string | null;
  readonly headTitle?: string | null;
  readonly headMeta?: string | null;
  readonly headContent?: string | null;
  readonly instructorImage?: string | null;
  readonly instructorName?: string | null;
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
  readonly image?: string | null;
  readonly video?: string | null;
  readonly category: Category | keyof typeof Category;
  readonly duration?: number | null;
  readonly learningObjective?: (string | null)[] | null;
  readonly isFeatured: boolean;
  readonly instructors: AsyncCollection<InstructorCourse>;
  readonly online?: boolean | null;
  readonly curriculum?: string | null;
  readonly headTitle?: string | null;
  readonly headMeta?: string | null;
  readonly headContent?: string | null;
  readonly instructorImage?: string | null;
  readonly instructorName?: string | null;
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