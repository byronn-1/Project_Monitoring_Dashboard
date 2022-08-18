export type ProjectTemplate = {
  projectId: number;
  name: string;
  projectStages: Record<string, ProjectStage>;
  projectDetails: ProjectDetailsTemplate;
};


export type ProjectStage = {
  complete: boolean;
};

export type AllStageDefinitions = Record<string, StageDefinition>;

export type StageDefinition = {
  stage: string;
};

export type ProjectDetailsTemplate = {
  initialIdeas: string;
  MVPBrief: string;
  niceToHaves: string;
  specificationList: string[];
  designSpecification: string[];
};
