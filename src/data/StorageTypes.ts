export type ProjectTemplate = {
  projectId: number;
  name: string;
  projectStages: ProjectStagesTemplate[];
  projectDetails: ProjectDetailsTemplate;
}

export type ProjectStagesTemplate = {
  stage: string;
  complete: boolean;
  stageShort: string | boolean ;
}

export type ProjectDetailsTemplate = {
  initialIdeas: string;
  MVPBrief: string;
  niceToHaves: string;
  specificationList: string[];
  designSpecification: string[];
}


