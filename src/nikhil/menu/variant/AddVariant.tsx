import React from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
export default function AddVariant({ modal, setModal }: any) {



    return (
        <div className="mb-5">

            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" open={modal} onClose={() => setModal(true)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                        <div className="font-bold text-lg">Add Variation</div>
                                        <button type="button" onClick={() => setModal(false)} className="text-white-dark hover:text-dark">
                                            x
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <form action="">
                                            <div className='mb-4'>
                                                <label >Variation Name</label>
                                                <input type="text" placeholder="Enter Category Name" className="form-input" />
                                            </div>
                                            <div className='mb-4'>
                                                <label >Online Display Name</label>
                                                <input type="text" placeholder="Enter Category Name" className="form-input" />
                                            </div>
                                            <div className='mb-4'>
                                                <label >Department Name</label>
                                                <select name="" id="" className='form-select'>
                                                    <option value="">Size</option>
                                                </select>
                                            </div>

                                            <label >Status</label>
                                            <label className="w-12 h-6 relative">
                                                <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox1" />
                                                <span className="outline_checkbox bg-icon border-2 border-[#ebedf2] dark:border-white-dark block h-full rounded-full before:absolute before:left-1 before:bg-[#ebedf2] dark:before:bg-white-dark before:bottom-1 before:w-4 before:h-4 before:rounded-full before:bg-[url(/assets/images/close.svg)] before:bg-no-repeat before:bg-center peer-checked:before:left-7 peer-checked:before:bg-[url(/assets/images/checked.svg)] peer-checked:border-primary peer-checked:before:bg-primary before:transition-all before:duration-300"></span>
                                            </label>
                                        </form>
                                        <div className="flex justify-end items-center mt-8">
                                            <button type="button" onClick={() => setModal(false)} className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button type="button" onClick={() => setModal(false)} className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}
