import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from "react-redux"
import { chooseMain_Course, chooseVegetable, chooseSide_Dish, chooseDessert } from '../redux/slices/RootSlice'

interface PlateFormProps {
  id?: string,
  data?: {}
}

const PlateForm = (props: PlateFormProps) => {
  const { register, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    if (props.id && props.id.length>0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated ${ data.brand } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else{
      dispatch(chooseMain_Course(data.main_course));
      dispatch(chooseVegetable(data.vegetable));
      dispatch(chooseSide_Dish(data.side_dish));
      dispatch(chooseDessert(data.dessert));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="Main_Course">Main Course</label>
          <Input {...register('main_course')} name = 'main_course' placeholder="Main Course" />
        </div>
        <div>
          <label htmlFor="Vegetable">Vegetable</label>
          <Input {...register('vegetable')} name = 'vegetable' placeholder="Vegetable"/>
        </div>
        <div>
          <label htmlFor="Side_Dish">Side Dish</label>
          <Input {...register('side_dish')} name = 'side_dish' placeholder="Side Dish"/>
        </div>
        <div>
          <label htmlFor="Dessert">Dessert</label>
          <Input {...register('dessert')} name = 'dessert' placeholder="Dessert"/>
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 rounded hover:bg-slate-800 text-white">Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default PlateForm
