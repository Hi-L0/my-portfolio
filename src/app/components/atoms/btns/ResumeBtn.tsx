import React from 'react'
import { BsDownload } from 'react-icons/bs'

function ResumeBtn() {
  return (
    <a className='inline-flex my-3 bg-slate-300 rounded p-2 text-slate-700 hover:no-underline no-underline' href='/resume/hamza_laaroussi_dev_resume.pdf' target="_blank" rel="noopener noreferrer" title='download my resume'>
      <p className='text-sm py-1 pr-2'>
        my resume    
      </p>
      <span><BsDownload size={25} /></span>
    </a>
  )
}

export default ResumeBtn