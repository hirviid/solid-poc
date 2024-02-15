import { ShapeType } from "@ldo/ldo";
import { solidcvSchema } from "./solidcv.schema";
import { solidcvContext } from "./solidcv.context";
import {
  CVShape,
  PersonShape,
  WorkExperienceShape,
  CompanyShape,
  DutiesShape,
  EducationShape,
  SchoolShape,
  SkillsShape,
  TechnicalSkillsShape,
  LanguagesShape,
  PortfolioShape,
  HighlightShape,
  HobbyShape,
  LanguageLevelShape,
  DegreeShape,
  DrivingLicense,
  LocationShape,
} from "./solidcv.typings";

/**
 * =============================================================================
 * LDO ShapeTypes solidcv
 * =============================================================================
 */

/**
 * CVShape ShapeType
 */
export const CVShapeShapeType: ShapeType<CVShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/CVShape",
  context: solidcvContext,
};

/**
 * PersonShape ShapeType
 */
export const PersonShapeShapeType: ShapeType<PersonShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/PersonShape",
  context: solidcvContext,
};

/**
 * WorkExperienceShape ShapeType
 */
export const WorkExperienceShapeShapeType: ShapeType<WorkExperienceShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/WorkExperienceShape",
  context: solidcvContext,
};

/**
 * CompanyShape ShapeType
 */
export const CompanyShapeShapeType: ShapeType<CompanyShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/CompanyShape",
  context: solidcvContext,
};

/**
 * DutiesShape ShapeType
 */
export const DutiesShapeShapeType: ShapeType<DutiesShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/DutiesShape",
  context: solidcvContext,
};

/**
 * EducationShape ShapeType
 */
export const EducationShapeShapeType: ShapeType<EducationShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/EducationShape",
  context: solidcvContext,
};

/**
 * SchoolShape ShapeType
 */
export const SchoolShapeShapeType: ShapeType<SchoolShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/SchoolShape",
  context: solidcvContext,
};

/**
 * SkillsShape ShapeType
 */
export const SkillsShapeShapeType: ShapeType<SkillsShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/SkillsShape",
  context: solidcvContext,
};

/**
 * TechnicalSkillsShape ShapeType
 */
export const TechnicalSkillsShapeShapeType: ShapeType<TechnicalSkillsShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/TechnicalSkillsShape",
  context: solidcvContext,
};

/**
 * LanguagesShape ShapeType
 */
export const LanguagesShapeShapeType: ShapeType<LanguagesShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/LanguagesShape",
  context: solidcvContext,
};

/**
 * PortfolioShape ShapeType
 */
export const PortfolioShapeShapeType: ShapeType<PortfolioShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/PortfolioShape",
  context: solidcvContext,
};

/**
 * HighlightShape ShapeType
 */
export const HighlightShapeShapeType: ShapeType<HighlightShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/HighlightShape",
  context: solidcvContext,
};

/**
 * HobbyShape ShapeType
 */
export const HobbyShapeShapeType: ShapeType<HobbyShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/HobbyShape",
  context: solidcvContext,
};

/**
 * LanguageLevelShape ShapeType
 */
export const LanguageLevelShapeShapeType: ShapeType<LanguageLevelShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/LanguageLevelShape",
  context: solidcvContext,
};

/**
 * DegreeShape ShapeType
 */
export const DegreeShapeShapeType: ShapeType<DegreeShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/DegreeShape",
  context: solidcvContext,
};

/**
 * DrivingLicense ShapeType
 */
export const DrivingLicenseShapeType: ShapeType<DrivingLicense> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/DrivingLicense",
  context: solidcvContext,
};

/**
 * LocationShape ShapeType
 */
export const LocationShapeShapeType: ShapeType<LocationShape> = {
  schema: solidcvSchema,
  shape: "https://ldo.js.org/LocationShape",
  context: solidcvContext,
};
