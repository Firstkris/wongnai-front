import React from "react"
import { Link } from "react-router-dom"

import { IconArrowRight } from "./icon-svg/IconArrowRight"

export const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <div className="breadcrumbs">
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index} className="flex gap-2 items-center">
          {index > 0 && (
            <div className="separator">
              <IconArrowRight />
            </div>
          )}
          <div>
            {breadcrumb.link ? (
              <Link
                to={breadcrumb.link}
                className="hover:font-bold hover:underline"
              >
                {breadcrumb.label}
              </Link>
            ) : (
              <span>{breadcrumb.label} test</span>
            )}
          </div>
        </span>
      ))}
    </div>
  )
}
