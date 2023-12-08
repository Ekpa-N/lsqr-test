'use client'
import { useState, useEffect } from 'react'
import userspage from "@/styles/usersPage.module.scss"
import ReactPaginate from 'react-paginate'
import PageSelect from './PageSelect'
import Selector from './Selector'


type PaginateProps = {
    handleClick: (e: any) => void;
    count: number;
    currentPage: number;
    selectOptions: number[];
    selectValue: number;
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


const Paginator: React.FC<PaginateProps> = ({ handleClick, count, currentPage, selectOptions, selectValue, handleSelectChange }) => {

    return (
        <div className={`${userspage.paginator}`}>
            <div className={`${userspage["display-count"]}`}>
                <h2 className={`${userspage.showing}`}>Showing</h2>
                <button className={`${userspage.count}`}>
                    <Selector handler={handleSelectChange} value={selectValue} selectOptions={selectOptions} />
                </button>
                <div className={`${userspage.total}`}> Out of 100</div>
            </div>
            <div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<PageSelect count={count} currentPage={currentPage} type='next' />}
                    onPageChange={handleClick}
                    pageRangeDisplayed={3}
                    pageCount={count}
                    previousLabel={<PageSelect count={count} currentPage={currentPage} type='prev' />}
                    renderOnZeroPageCount={null}
                    containerClassName="page-selector-container"
                    pageClassName='page'
                    activeClassName='activepage'
                />
            </div>
        </div>
    )
}


export default Paginator

