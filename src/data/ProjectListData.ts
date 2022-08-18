import { AllStageDefinitions, ProjectTemplate } from "./StorageTypes";

export const PROJECT_LIST_TEMPLATE: ProjectTemplate[] = [
  {
    projectId: 0,
    name: "Inventory Project",
    projectStages: {
      Brief: {
        complete: true,
      },
      Spec: {
        complete: true,
      },
      Design: {
        complete: true,
      },
      Component: {
        complete:  false
      },
      State: {
        complete:  false
      },
      Further: {
        complete:  false
      },
      Test: {
        complete:  false
      },
      Build: {
        complete:  false
      },
    },
    projectDetails: {
      initialIdeas:
        "Application to keep track of projects amounts of products available and product details",
      MVPBrief:
        "Build a frontend application that stores and displays varying amounts of products available and product details. Data to be persisted to a local file. Application should run in the browser.",
      niceToHaves:
        "To have a data base in AWS so I can access this any where. To have it portable to windows and Mac",
      specificationList: [
        "--UI that lists all projects",
        "--click on a project to show options",
        "--update project update project flow completion",
      ],
      designSpecification: ["very simple", "white blue grey and black"],
    },
  },
  {
    projectId: 1,
    name: "CSS React Project",
    projectStages: {
      Brief: {
        complete: false,
      },
      Spec: {
        complete: true,
      },
      Design: {
        complete: true,
      },
      Component: {
        complete:  false
      },
      State: {
        complete:  false
      },
      Further: {
        complete:  false
      },
      Test: {
        complete:  false
      },
      Build: {
        complete:  false
      },
    },
    projectDetails: {
      initialIdeas:
        "Experimental app to test creation of new components that can handle CSS",
      MVPBrief:
        "one page app",
      niceToHaves:
        "different ways of creating colors and text in each module",
      specificationList: [
        "--UI that lists all projects",
        "--click on a project to show options",
        "--update project update project flow completion",
      ],
      designSpecification: ["very simple", "white blue grey and black"],
    },
  },
  {
    projectId: 2,
    name: "Meal Planning Project",
    projectStages: {
      Brief: {
        complete: true,
      },
      Spec: {
        complete: true,
      },
      Design: {
        complete: true,
      },
      Component: {
        complete:  false
      },
      State: {
        complete:  false
      },
      Further: {
        complete:  false
      },
      Test: {
        complete:  false
      },
      Build: {
        complete:  false
      },
    },
    projectDetails: {
      initialIdeas:
        "Keep all favorite recipes in one  place",
      MVPBrief:
        "be able to search for recipe",
      niceToHaves:
        "search recipe against time to cook",
      specificationList: [
        "--UI that lists all projects",
        "--click on a project to show options",
        "--update project update project flow completion",
      ],
      designSpecification: ["very simple", "white blue grey and black"],
    },
  },
  {
    projectId: 3,
    name: "Staffing Planner Project",
    projectStages: {
      Brief: {
        complete: true,
      },
      Spec: {
        complete: true,
      },
      Design: {
        complete: true,
      },
      Component: {
        complete:  false
      },
      State: {
        complete:  false
      },
      Further: {
        complete:  false
      },
      Test: {
        complete:  false
      },
      Build: {
        complete:  false
      },
    },
    projectDetails: {
      initialIdeas:
        "Create a calender app for staffing rota at multiple venues",
      MVPBrief:
        "be able to search for recipe",
      niceToHaves:
        "search recipe against time to cook",
      specificationList: [
        "--UI that lists all projects",
        "--click on a project to show options",
        "--update project update project flow completion",
      ],
      designSpecification: ["very simple", "white blue grey and black"],
    },
  },
  {
    projectId: 4,
    name: "Web3 Project",
    projectStages: {
      Brief: {
        complete: true,
      },
      Spec: {
        complete: true,
      },
      Design: {
        complete: true,
      },
      Component: {
        complete:  false
      },
      State: {
        complete:  false
      },
      Further: {
        complete:  false
      },
      Test: {
        complete:  false
      },
      Build: {
        complete:  false
      },
    },
    projectDetails: {
      initialIdeas:
        "Create a calender app for staffing rota at multiple venues.",
      MVPBrief:
        "be able to search for recipe",
      niceToHaves:
        "search recipe against time to cook",
      specificationList: [
        "--UI that lists all projects",
        "--click on a project to show options",
        "--update project update project flow completion",
      ],
      designSpecification: ["very simple", "white blue grey and black"],
    },
  },
  {
    projectId: 5,
    name: "Job Application Tracker",
    projectStages: {
      Brief: {
        complete: true,
      },
      Spec: {
        complete: true,
      },
      Design: {
        complete: true,
      },
      Component: {
        complete:  false
      },
      State: {
        complete:  false
      },
      Further: {
        complete:  false
      },
      Test: {
        complete:  false
      },
      Build: {
        complete:  false
      },
    },
    projectDetails: {
      initialIdeas:
        "App for tracking job applications the amount of and companies applied to",
      MVPBrief:
        "one page app",
      niceToHaves:
        "different ways of creating colors and text in each module",
      specificationList: [
        "--UI that lists all projects",
        "--click on a project to show options",
        "--update project update project flow completion",
      ],
      designSpecification: ["very simple", "white blue grey and black"],
    },
  },
];

export const ALL_STAGE_DEFINITIONS: AllStageDefinitions = {
  Brief: {
    stage: "Initial Ideas & Brief",
  },
  Spec: {
    stage: "Detailed Specification List",
  },
  Design: {
    stage: "Visual Design",
  },
  Component: {
    stage: "Component Architecture",
  },
  State: {
    stage: "State Architecture",
  },
  Further: {
    stage: "Further Considerations",
  },
  Test: {
    stage: "Testing",
  },
  Build: {
    stage: "Build",
  },
};

export const SHORT_STAGE_NAME_LIST = [
  "Brief", "Spec", "Design", "Test", "Build"
] 