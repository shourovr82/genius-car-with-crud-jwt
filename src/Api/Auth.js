

export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email
  }

  // get jwt token
  fetch('https://genius-car-server-murex.vercel.app/jwt', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(currentUser)
  })
    .then(res => res.json())
    .then(data => {
      // local storage is easiest but  not the best place to store jwt token 
      localStorage.setItem('geniusToken', data.token);
      // navigate(from, { replace: true })
    })

}