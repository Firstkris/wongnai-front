import React from "react"
import { Link } from "react-router-dom"

import { IconArrowRight } from "./icon-svg/IconArrowRight"

export const Breadcrumbs = ({ breadcrumbs, pageName }) => {
  return (
    //check keys
    <div className="breadcrumbs flex items-center" key={pageName}>
      {breadcrumbs.map((breadcrumb, index) => (
        <>
          {index > 0 && (
            <div className="separator">
              <IconArrowRight />
            </div>
          )}
          <span key={index} className="flex gap-2 items-center ">
            <div>
              {breadcrumb.link ? (
                <Link
                  to={breadcrumb.link}
                  className="hover:font-semibold hover:underline px-0.5"
                >
                  {breadcrumb.label}
                </Link>
              ) : (
                <span>{breadcrumb.label} test</span>
              )}
            </div>
          </span>
        </>
      ))}
    </div>
  )
}
