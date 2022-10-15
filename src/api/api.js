export function getUserData(userId) {
  return (
    fetch('http://localhost:3000/user/' + userId)
      .then(res => res.json())
  )
}