// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Level = {
  "FOUNDATION": "FOUNDATION",
  "INTERMEDIATE": "INTERMEDIATE",
  "ADVANCE": "ADVANCE"
};

const CourseCategory = {
  "DATA_SCIENCE": "DATA_SCIENCE",
  "WEB_DEVELOPMENT": "WEB_DEVELOPMENT",
  "CREATIVE_GRAPHICS_DESIGN": "CREATIVE_GRAPHICS_DESIGN",
  "OFFICE_PRODUCTIVITY": "OFFICE_PRODUCTIVITY",
  "SECURITY": "SECURITY",
  "CLOUD_COMPUTING": "CLOUD_COMPUTING",
  "PROJECT_MANAGEMENT": "PROJECT_MANAGEMENT",
  "NETWORKING": "NETWORKING",
  "PROGRAMMING": "PROGRAMMING",
  "AUTOCAD": "AUTOCAD",
  "DIGITAL_MARKETING": "DIGITAL_MARKETING",
  "FINANCE_ACCOUNTING": "FINANCE_ACCOUNTING"
};

const { Instructor, Course } = initSchema(schema);

export {
  Instructor,
  Course,
  Level,
  CourseCategory
};