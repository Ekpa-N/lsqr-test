'use client'
import { useEffect, useState } from "react"
import ImageHolder from "@/components/ImageHolder"
import variables from "@/styles/variables.module.scss"
import home from "@/styles/homepage.module.scss"
import Inputer from "@/components/Inputer"
import Link from "next/link"

type passwordViewState = {
  isHidden: boolean,
  inputType: string
}
type loginFields = {
  email: string,
  password: string
}

export default function Home() {
  const initialLoginFields = {email: "", password:""}
  const [passwordView, setPasswordView] = useState<passwordViewState>({isHidden: true, inputType:"password"})
  const [loginDetails, setLoginDetails] = useState<loginFields>(initialLoginFields)

  function login(e: React.SyntheticEvent) {
    // debugger
    e.preventDefault()
  }

  function handlePasswordView(e: React.SyntheticEvent) {
    e.preventDefault()
    if(passwordView.isHidden) {
      setPasswordView({...passwordView, isHidden:false, inputType:"text"})
      return
    }
    setPasswordView({...passwordView, isHidden:true, inputType:"password"})
  }

  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    setLoginDetails({...loginDetails, [e.currentTarget.name]:e.currentTarget.value})
  }
  return (
    <main className={`w-screen h-screen ${home.main}`}>
      <div className={`${home["logo"]}`}>
        <div className="w-full h-full relative">
          <ImageHolder filling={true} src="./images/lendsqr-logo.svg" />
        </div>
      </div>
      <div className={`${home["login-page-left"]}`}>
        <div className={`${home["homepage-image"]}`}>
          {/* <ImageHolder filling={true} src="./images/homepage-image.svg" /> */}
          </div>        
      </div>
      <div className={`${home["login-page-right"]}`}>
        <form className={`${home["login-form"]}`}>
          <div className={`${home["title"]}`}>
            <h2 className="">Welcome!</h2>
            <h3>Enter details to login.</h3>
          </div>
          <div className={`${home["input-section"]}`}>
            <Inputer handler={handleChange} name="email" classname={home.inputer} placeholder="Email" />
            <Inputer handler={handleChange} name="password" classname={home.inputer} placeholder="Password" buttonClass={home["password-reveal"]} inputType={passwordView.inputType} operation={handlePasswordView} displayState={passwordView.isHidden}/>
          </div>

          <Link href={"#"}>
            <div className={`${home["reset-password"]}`}>FORGOT PASSWORD?</div>
          </Link>

          <button onClick={(e) => { login(e) }} className={`${home["form-submit"]}`}>LOG IN</button>
        </form>
      </div>
    </main>
  )
}
