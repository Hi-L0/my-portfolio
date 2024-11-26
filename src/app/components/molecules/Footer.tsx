import { email } from '@/data/data'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
  return (
    <div className='flex bottom-1 gap-10 footer'>
        {/* icons links */}
        <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target='_blank'>
            <FaGithub size={30} />
        </a>
        <a href={process.env.NEXT_PUBLIC_LinkedIn_URL} target='_blank'>
            <FaLinkedinIn size={30} />
        </a>
        <a href={`mailto:${email}`}>
            <FaEnvelope size={30} />
        </a>
        {/* <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
            Solutions
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-1"
          >
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Insights</p>
                <p className="text-white/50">Measure actions your users take</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Automations</p>
                <p className="text-white/50">Create your own targeted content</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Reports</p>
                <p className="text-white/50">Keep track of your growth</p>
              </a>
            </div>
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Documentation</p>
                <p className="text-white/50">Start integrating products and tools</p>
              </a>
            </div>
          </PopoverPanel>
        </Popover> */}
    </div>
  )
}

export default Footer