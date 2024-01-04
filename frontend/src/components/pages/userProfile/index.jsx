import React, { useState, useEffect } from 'react';
import './index.css';
import TextInput from '../../input';
import CustomButton from '../../button';
import { Link } from 'react-router-dom';
import { request } from '../../../helpers/request';

const UserProfile = () => {

    const [first_name,setFirstName] = useState("");
    const [last_name,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const getUserDetails = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log(token);
            console.log('Authorization'+ `Bearer ${token}`,)
            const response = await request('/userprofile', 'GET', null, {
                    'Authorization': `Bearer ${token}`,
            });
            console.log('Axios Config:', response.config);
            
            setFirstName(response.first_name);
            setLastName(response.last_name);
            setEmail(response.email);
            setPassword(response.password);

        } catch (error) {
            console.error('Error during fetching user details:', error);
        }
    };

    const updateUserDetails = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
          const user = {first_name,last_name,email,password};
          const response = await request('/userprofile', 'POST', user, {
            'Authorization': `Bearer ${token}`,
          });
    
          console.log(response);
    
        } catch (error) {
          console.error('Error during registration:', error);
        }
    }
    
    useEffect(() => {
        getUserDetails();
    }, []);
    
  
  return (
    <div className='register-page'>
      <div className='form-container'>
        <form className='form-data' onSubmit={updateUserDetails}>
          <h1 className='title'>User Profile</h1>
          <div className="center">
            <TextInput
              label='First Name'
              placeholder={first_name}
              type='text'
              name='first_name'
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <TextInput
              label='Last Name'
              placeholder={last_name}
              type='text'
              name='last_name'
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />

            <TextInput
              label='Email'
              placeholder={email}
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextInput
              label='Password'
              placeholder={password}
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className='btn'>
              <CustomButton
                children={'Update Profile'}
                className="update-btn"
                type="submit"
              />
              <p className='mark'>Want to logout? <Link to='/' className='link-to'>
                Log out
              </Link></p>
            </div>
          </div>
        </form>
      </div>
      <div className='right-reg'></div>
    </div>
  );
};

export default UserProfile;

// import React, { useState, useEffect } from 'react';
// import './index.css';
// import TextInput from '../../input';
// import CustomButton from '../../button';
// import { Link } from 'react-router-dom';
// import { request } from '../../../helpers/request';

// const UserProfile = () => {

//     const [first_name,setFirstName] = useState("");
//     const [last_name,setLastName] = useState("");
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");

//     const getUserDetails = async () => {
//         try {
//             const token = localStorage.getItem('token');
//             console.log(token);
//             console.log('Authorization'+ `Bearer ${token}`,)
//             const response = await request('/userprofile', 'GET', null, {
//                     'Authorization': `Bearer ${token}`,
//             });
//             console.log('Axios Config:', response.config);
            
//             setFirstName(response.first_name);
//             setLastName(response.last_name);
//             setEmail(response.email);
//             setPassword(response.password);

//         } catch (error) {
//             console.error('Error during fetching user details:', error);
//         }
//     };
    
//     useEffect(() => {
//         getUserDetails();
//     }, []);
    
  
//   return (
//     <div className='register-page'>
//       <div className='form-container'>
//         <form className='form-data'>
//           <h1 className='title'>User Profile</h1>
//           <div className="center">
//             <TextInput
//               label='First Name'
//               placeholder={first_name}
//               type='text'
//               name='first_name'
//               value={first_name}
//             //   onChange={}
//               required
//             />

//             <TextInput
//               label='Last Name'
//               placeholder={last_name}
//               type='text'
//               name='last_name'
//               value={last_name}
//             //   onChange={}
//             />

//             <TextInput
//               label='Email'
//               placeholder={email}
//               type='email'
//               name='email'
//               value={email}
//             //   onChange={}
//             />

//             <TextInput
//               label='Password'
//               placeholder={password}
//               type='password'
//               name='password'
//               value={password}
//             //   onChange={}
//             />

//             <div className='btn'>
//               <CustomButton
//                 children={'Update Profile'}
//                 className="update-btn"
//                 type="submit"
//               />
//               <p className='mark'>Want to logout? <Link to='/' className='link-to'>
//                 Log out
//               </Link></p>
//             </div>
//           </div>
//         </form>
//       </div>
//       <div className='right-reg'></div>
//     </div>
//   );
// };

// export default UserProfile;
