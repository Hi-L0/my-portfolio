import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React from 'react'
// import {
//   ArchiveBoxXMarkIcon,
//   ChevronDownIcon,
//   PencilIcon,
//   Square2StackIcon,
//   TrashIcon,
// } from '@heroicons/react/16/solid'
import { BsDownload } from 'react-icons/bs'
import { IoChevronDown, IoChevronDownCircleOutline } from 'react-icons/io5'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'


function ResumeBtn() {
  return (
    // <a className='inline-flex my-3 bg-slate-300 rounded p-2 text-slate-700 hover:no-underline no-underline' href='/resume/hamza_laaroussi_dev_resume.pdf' target="_blank" rel="noopener noreferrer" title='download my resume'>
    //   <p className='text-sm py-1 pr-2'>
    //     my resume    
    //   </p>
    //   <span><BsDownload size={25} /></span>
    // </a>
    <div className="top-24 w-52 my-3 py-2">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md  bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Resume
          <IoChevronDown className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-[#091122] p-1 text-sm/6  text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <a className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:no-underline hover:text-white no-underline data-[focus]:bg-white/10' href='/resume/hamza_laaroussi_dev_resume.pdf' target="_blank" rel="noopener noreferrer" title='download my resume'>
              French version
            </a>
          </MenuItem>
          {/* TODO 
              - integrate english resume
          */}
          <MenuItem>
            <a className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:no-underline no-underline hover:text-white data-[focus]:bg-white/10' href='#' target="_blank" rel="noopener noreferrer" title='download my resume'>
              English version
            </a>
          </MenuItem>
          
        </MenuItems>
      </Menu>
    </div>
  )
}

export default ResumeBtn