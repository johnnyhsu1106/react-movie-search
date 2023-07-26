const Error = ({hasError}) => {
  return (
    hasError ? <div>Somthing goes wrong</div> : null
  )
}

export default Error;