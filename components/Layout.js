export default function Layout({ children, setter }) {

  return (
    <div className={`w-screen h-screen border`}>
      {children}
    </div>
  )
}