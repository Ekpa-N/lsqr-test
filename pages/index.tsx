import { ReactElement, useState } from 'react'
import Layout from '../components/Layout'
import ImageHolder from '@/components/Image_Holder'
// import NestedLayout from '../components/nested-layout'
import type { NextPageWithLayout } from './_app'
import Textfield from '@/components/TextField'
import Button from '@/components/ButtonMaker'

const Page: NextPageWithLayout = () => {
  const [loginDetails, setLoginDetails] = useState({ username: "", password: "" })
  const[inputState, setInputState] = useState("password")

  function formEdit(e: any) {
    setLoginDetails({ ...loginDetails, [e.target.name]:e.target.value})
  }


  function handleInputState(e: any) {
    e.preventDefault()
    if(inputState == "password") {
      setInputState("text")
      return
    }
    setInputState("password")
  }


  return (
    <div className={`flex flex-col justify-between mdl:h-[99%] mdl:flex-row`}>
      <div className='borde mdl:w-[50%] mdl:h-full mdl:flex-col flex pt-[10px] pl-[10px]'>
        <div className={`borde w-[170px] h-[36px] flex justify-between mdl:ml-[97px] mdl:mt-[106px]`}>
          <div className=' borde relative w-[25px] h-[25px]'>
            <ImageHolder src='/icons/lsqr-logo.svg' />
          </div>
          <div className=' relative w-[138px] h-full'>
            <ImageHolder src='/icons/lendsqr.svg' />
          </div>
        </div>
        <div className='hidden mdl:block relative xl:w-[600px] h-[337px] mt-[139px]'>
          <ImageHolder src='/icons/lsqr-signin-image.svg'/>
        </div>
      </div>
      <div className='flex borde mdl:w-[50%] justify-center'>
        <div className='p-[10px] w-[95%] self-cente mt-[220px]'>
          <form className='p-[10px] w-[100%] flex flex-col'>
            <h2 className='font-[700] text-[#213F7D] text-[40px] leading-[54.64px]'>
              Welcome!
            </h2>
            <h2 className='font-[400] text-[#545F7D] text-[20px] leading-[27.32px]'>
              Enter details to login.
            </h2>
            <div className='mt-[60px] h-[50px] w-[100%] rounded-[5px] border-[2px] border'></div>
            <div className='mt-[24px] h-[50px] flex justify-between w-[100%] rounded-[5px] border-[2px] border'>
              <div className='h-[100%] w-[75%]'>
              <Textfield type={inputState} char="textField" value={loginDetails.password} handler={formEdit} name="password"   />
              </div>
              <div className='w-[25%] h-full'>
                <Button onClick={handleInputState} text={inputState == "text" ? "HIDE" : "SHOW"} textColor='text-[#39cdcc]' textSize='text-[12px]' />
              </div>
            </div>
            <h2 className='mt-[24px] font-[600] text-[#39cdcc] text-[12px]'>
              FORGOT PASSWORD?
            </h2>
            <div className='mt-[30px] w-[100%] h-[48px] rounded-[8px] bg-[#39cdcc]'>
              <Button textColor="text-[white]" textSize='text-[14px]' text="LOG IN" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement, testState) {
  return (
    <Layout setter={testState.borderState}>
      {page}
    </Layout>
  )
}

export default Page