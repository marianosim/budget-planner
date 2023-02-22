import { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { AppContext } from "../context/AppContext";



export const Budget = () => {

  const [edit, setEdit] = useState(false);
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget)
  const { onResetForm } = useForm({
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'EDIT_BUDGET',
      payload: newBudget
    })
    onResetForm();
    setEdit(false)
  }

  return (
    <div className="alert alert-secondary">
      {
        edit ||
        <div className="d-flex justify-content-between">
          <span><strong>Budget:</strong> ${budget}</span>
          <button
            className="btn btn-primary"
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
        </div>
      }
      {
        edit &&
        <div className="d-flex justify-content-between">
          <form onSubmit={handleSubmit} >
            <input
              type='text'
              className='form-control'
              name='newBudget'
              value={newBudget}
              onChange={e => setNewBudget(e.target.value)}
            />
            <button className='btn btn-primary mt-3' type='submit'>
              Save
            </button>
          </form>

        </div>
      }
    </div>
  )
}
