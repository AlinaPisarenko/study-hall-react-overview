import {useState} from 'react'

const defaultData = {
  name: '',
  image: '',
  isGood: ''
}

export default function NewCharacterForm({ handleAddChar }) {
  const [formData, setFormData] = useState(defaultData)

  const handleSubmit = (e) => {
    e.preventDefault()

    const newObj = {...formData, isGood: Boolean(formData.isGood)}

    handleAddChar(newObj)

  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  console.log(formData)


  return (
  <div>
    <form onSubmit={handleSubmit} id='new-form'>
        <input
                value={formData.name}
                onChange={handleChange}
                name='name'
                type="text"
                placeholder="name"
              />
        <input
                value={formData.image}
                onChange={handleChange}
                name='image'
                type="text"
                placeholder="image"
              />
        <select  name='isGood' value={formData.isGood} onChange={handleChange}>
          <option value={true}>Good</option>
          <option value={false}>Bad</option>
        </select>

        <button>Add new character</button>
    </form>
  </div>
  )
}
