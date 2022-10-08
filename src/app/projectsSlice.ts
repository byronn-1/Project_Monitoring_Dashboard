import { createSlice } from '@reduxjs/toolkit'
import { PROJECT_LIST_TEMPLATE } from "../data/ProjectListData";



const initialState = {projects: PROJECT_LIST_TEMPLATE};

export const projectTemplateSlice = createSlice({
  name: 'projectsList',
  initialState,
  reducers: {
    toggleProjectComplete: (state, action) => {
      const { projectId, shortName } = action.payload;

      const project = state.projects.find(project => projectId === project.projectId)!;
      const stage = project?.projectStages[shortName]!;

      if (stage.complete) {
        stage.complete = false;
      } else {
        stage.complete = true;
      }
      return state;
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleProjectComplete} = projectTemplateSlice.actions

export default projectTemplateSlice.reducer