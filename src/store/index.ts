import create from 'zustand'
import { updateTaskInput } from '../schema/todo'

type State = {
  editedTask: updateTaskInput
  updateEditedTask: (payload: updateTaskInput) => void
  resetEditedTask: () => void
}

const useStore = create<State>((set) => ({
  editedTask: { taskId: '', title: '', body: '' },
  updateEditedTask: (payload) =>
    set({
      editedTask: payload,
    }),
  resetEditedTask: () =>
    set({ editedTask: { taskId: '', title: '', body: '' } }),
}))
export default useStore
