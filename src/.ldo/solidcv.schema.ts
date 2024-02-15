import { Schema } from "shexj";

/**
 * =============================================================================
 * solidcvSchema: ShexJ Schema for solidcv
 * =============================================================================
 */
export const solidcvSchema: Schema = {
  type: "Schema",
  start: "https://ldo.js.org/CVShape",
  shapes: [
    {
      id: "https://ldo.js.org/CVShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://xmlns.com/foaf/0.1/Document",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/person",
              valueExpr: "https://ldo.js.org/PersonShape",
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Defines the persons personal information",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/Text",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Profile statement",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "profileStatement",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/workExperience",
              valueExpr: "https://ldo.js.org/WorkExperienceShape",
              min: 0,
              max: -1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The persons work experience",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "workExperience",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/education",
              valueExpr: "https://ldo.js.org/EducationShape",
              min: 0,
              max: -1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The persons education",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/skills",
              valueExpr: "https://ldo.js.org/SkillsShape",
              min: 0,
              max: -1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The persons skills",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "skills",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/languages",
              valueExpr: "https://ldo.js.org/LanguagesShape",
              min: 0,
              max: -1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The persons languages",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "languages",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/portfolio",
              valueExpr: "https://ldo.js.org/PortfolioShape",
              min: 0,
              max: -1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The persons portfolio",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "portfolio",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/hobbies",
              valueExpr: "https://ldo.js.org/HobbyShape",
              min: 0,
              max: -1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The persons hobbies",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "hobbies",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/PersonShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://xmlns.com/foaf/0.1/Person",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/givenName",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The persons first name",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "firstName",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/familyName",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The persons last name",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "lastName",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/birthDate",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#date",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The persons date of birth",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "dateOfBirth",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/telephone",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The persons telephone number",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "telephone",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/jobTitle",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The job title of the person",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "jobTitle",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/url",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#anyURI",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The persons LinkedIn profile",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "linkedInUrl",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/location",
              valueExpr: "https://ldo.js.org/LocationShape",
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The persons location",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "location",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/image",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#anyURI",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The persons profile picture",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "profilePicture",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/drivingLicense",
              valueExpr: "https://ldo.js.org/DrivingLicense",
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The persons driving license",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "drivingLicense",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/WorkExperienceShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Organization",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/jobTitle",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The job title of the person",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "jobTitle",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/startDate",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#date",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The start date of the job",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "startDate",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/endDate",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#date",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The end date of the job",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "endDate",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/location",
              valueExpr: "https://ldo.js.org/CompanyShape",
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The company where the person worked",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "work",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/description",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Summary of the job",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "summary",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/duties",
              valueExpr: "https://ldo.js.org/DutiesShape",
              min: 0,
              max: -1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The duties of the job",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "duties",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/CompanyShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Organization",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The name of the company",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "companyName",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/location",
              valueExpr: "https://ldo.js.org/LocationShape",
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The location of the company",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "companyLocation",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/DutiesShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Text",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/Text",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The duties of the job",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "duties",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/EducationShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Organization",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/Organization",
              valueExpr: "https://ldo.js.org/SchoolShape",
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The school where the person studied",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "school",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/degree",
              valueExpr: "https://ldo.js.org/DegreeShape",
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The degree the person has",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "degree",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/description",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Experience of the education",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "expertise",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/startDate",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#date",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The start date of the education",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "startDate",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/endDate",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#date",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The end date of the education",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "endDate",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/description",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Summary of the education",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "remark",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/location",
              valueExpr: "https://ldo.js.org/LocationShape",
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The location of the education",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "educationLocation",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/SchoolShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Organization",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/name",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The name of the school",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "schoolName",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/location",
              valueExpr: "https://ldo.js.org/LocationShape",
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The location of the school",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "schoolLocation",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/SkillsShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Text",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/technicalSkills",
              valueExpr: "https://ldo.js.org/TechnicalSkillsShape",
              min: 0,
              max: -1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The technical skills of the person",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "technicalSkills",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/softSkills",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The soft skills of the person",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "softSkills",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/TechnicalSkillsShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Text",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/skillName",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The name of the technical skill",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "skillName",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/level",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#integer",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The level of the technical skill",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "level",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/isFavorite",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#boolean",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The favorite technical skill",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "isFavorite",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/LanguagesShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Text",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/languageName",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The name of the language",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "languageName",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/languageLevel",
              valueExpr: "https://ldo.js.org/LanguageLevelShape",
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The proficiency of the language",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "languageProficiency",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/PortfolioShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Text",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/title",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The title of the portfolio",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "portfolioTitle",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/portfolioDescription",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The description of the portfolio",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "portfolioDescription",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/portfolioLink",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#anyURI",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The link to the portfolio",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "portfolioLink",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/highlight",
              valueExpr: "https://ldo.js.org/HighlightShape",
              min: 0,
              max: -1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The highlights of the portfolio",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "portfolioHighlights",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/HighlightShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Text",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/Text",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The highlight of the portfolio",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "highlight",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/HobbyShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Text",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/Text",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The hobbies of the person",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "hobby",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/LanguageLevelShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Text",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/2001/XMLSchema#string",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "http://example.org/BASIC",
                  "http://example.org/INTERMEDIATE",
                  "http://example.org/ADVANCED",
                  "http://example.org/FLUENT",
                  "http://example.org/NATIVE",
                ],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The level of the language",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "languageLevel",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/DegreeShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Text",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/2001/XMLSchema#string",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "http://example.org/HIGH_SCHOOL",
                  "http://example.org/POST_GRADUATE",
                  "http://example.org/PROFESSIONAL_BACHELOR",
                  "http://example.org/ACADEMIC_BACHELOR",
                  "http://example.org/MASTER",
                  "http://example.org/PHD",
                ],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The degree the person has",
                  },
                },
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
                  object: {
                    value: "degreeType",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/DrivingLicense",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Text",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/2001/XMLSchema#string",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "http://example.org/NA",
                  "http://example.org/A",
                  "http://example.org/AM",
                  "http://example.org/B",
                  "http://example.org/C",
                  "http://example.org/D",
                  "http://example.org/G",
                ],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The type of driving license the person has",
                  },
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "https://ldo.js.org/LocationShape",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://schema.org/Place",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/addressLocality",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The city where the person lives",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "http://schema.org/addressCountry",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The country where the person lives",
                  },
                },
              ],
            },
          ],
        },
      },
    },
  ],
};
