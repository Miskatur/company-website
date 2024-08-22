import React from 'react'
import Check from "../../../../../public/img/axil-custom/star-check.svg"
import Image from 'next/image'

const ExpandableList = ({ faq, isExpanded, onExpand, nestedlist }) => {
    const { accordionId, title, text } = faq

    return (
        <div className="accordion-item ">
            <h2 className="accordion-header px-3 " id={accordionId}>
                <button
                    className={`accordion-button ${isExpanded ? '' : 'collapsed'}`}
                    type="button"
                    onClick={onExpand}
                    aria-expanded={isExpanded}
                    aria-controls={accordionId}
                >
                    {title}
                </button>
            </h2>
            <div
                id={accordionId}
                className={`accordion-collapse  collapse ${isExpanded ? 'show' : ''}`}
                aria-labelledby={accordionId}
            >
                <div className="accordion-body px-3">
                    <ul>

                        {nestedlist.map((faq, index) => (
                            <li key={index}><Image src={Check} alt="checked" height={19} /> &nbsp; {faq}</li>
                        ))}


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExpandableList
