import React from 'react'
import './ContactMe.css'

export default function ContactMe () {
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = React.useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      topic: '',
      comments: ''
    }
  )

  function handleChange (event) {
    const { name, value } = event.target // This method is called destructuring
    setFormData(prevDataForm => {
      return {
        ...prevDataForm,
        [name]: value
      }
    })
  }
  /* function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
    }

    function validation(){
        {console.log(formData)}
        <div className="col">
            <h1>Final Object</h1>
            <p>This is my final Object</p>
            {Object.keys(formData).map(Data => {
                return<div>{Data}</div>})}
    </div>} */

  return (
    <section>
      <div className='contactMe-section'>
        <div className='contactGreeting'>
          <h1 className='contactMe-title'>Contact Me</h1>
          <p className='contactMe-subTitle'>Feel free to ask any inquiry, I am reaching out to you as soon as possible</p>
        </div>
        <form action='https://formsubmit.co/blasnjacobo05@gmail.com' method='POST'>
          <div className='contactMe-personalInfo'>
            <div>
              <p>First Name: </p>
              <input
                type='text'
                onChange={handleChange}
                name='firstName'
                value={formData.firstName}
              />
            </div>
            <div>
              <p>Last Name: </p>
              <input
                type='text'
                onChange={handleChange}
                name='lastName'
                value={formData.lastName}
              />
            </div>
            <div>
              <p>Email: </p>
              <input
                type='email'
                onChange={handleChange}
                name='email'
                value={formData.email}
              />
            </div>
            <div>
              <div>
                <p>Phone Number: </p>
                <input
                  className='contactMe-phone'
                  type='tel'
                  placeholder='Format: 123-456-7890'
                  onChange={handleChange}
                  name='telephone'
                  pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                  value={formData.telephone}
                />
              </div>
            </div>
          </div>
          <div className='InquiryComment'>
            <p>Inquiry: </p>
            <select
              id='topic'
              value={formData.topic}
              onChange={handleChange}
              name='topic'
            >
              <option value=''>-- Choose --</option>
              <option value='job'>Possible job offer</option>
              <option value='freelancer'>Freelancer project</option>
              <option value='inquiries'>General inquiries</option>
              <option value='others'>Others</option>
            </select>
          </div>
          <br />
          <div>
            <p className='contactMe-Comment'>Comments: </p>
            <textarea
              onChange={handleChange}
              name='comments'
              value={formData.comments}
              rows='6' cols='54'
            />
          </div>
          <div className='ContactMeButton'>
            <button className='ButtonSubmit' type='submit'>Submit</button>
            <></>
          </div>

        </form>
      </div>
    </section>
  )
}
