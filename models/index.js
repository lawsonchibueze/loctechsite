// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TestimonialCategory = {
  "STUDY_ENVIRONMENT": "STUDY_ENVIRONMENT",
  "TRAINING_STANDARD": "TRAINING_STANDARD",
  "INSTRUCTOR": "INSTRUCTOR",
  "JOB_PLACEMENT": "JOB_PLACEMENT"
};

const Category = {
  "ALL": "ALL",
  "WEB_DEVELOPMENT": "WEB_DEVELOPMENT",
  "DATA_SCIENCE": "DATA_SCIENCE",
  "NETWORKING_SECURITY": "NETWORKING_SECURITY",
  "GRAPHICS_MEDIA": "GRAPHICS_MEDIA",
  "OFFICE_PRODUCTIVITY": "OFFICE_PRODUCTIVITY"
};

const { Testimonial, Events, Post, HeroData, Instructor, Course, InstructorCourse } = initSchema(schema);

export {
  Testimonial,
  Events,
  Post,
  HeroData,
  Instructor,
  Course,
  InstructorCourse,
  TestimonialCategory,
  Category
};