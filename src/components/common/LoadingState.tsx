import Loader from "./Loader"

const LoadingState = () => {
  return (
    <section className="h-screen flex-col fixed left-0 bottom-0 z-50 w-full flex items-center bg-white justify-center">
      <Loader />
      <p>Connecting ...</p>
    </section>
  )
}

export default LoadingState
