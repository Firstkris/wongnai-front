import React from "react"
import { Link } from "react-router-dom"

import { IconArrowRight } from "./icon-svg/IconArrowRight"

export const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    //check keys
    <div className="breadcrumbs flex items-center">
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index} className="flex gap-2 items-center ">
          {index > 0 && (
            <div className="separator">
              <IconArrowRight />
            </div>
          )}
          <div>
            {breadcrumb.link ? (
              <Link
                to={breadcrumb.link}
                className="hover:font-semibold hover:underline px-0.5"
              >
                {breadcrumb.label}
              </Link>
            ) : (
              <span className="font-medium cursor-default">
                {breadcrumb.label}
              </span>
            )}
          </div>
        </span>
      ))}
    </div>
  )
}
