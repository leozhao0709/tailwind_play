import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { NavLink, RouteObject } from 'react-router-dom';

type NavItemProps = React.HTMLAttributes<HTMLAnchorElement> & {
  route: RouteObject;
  parentRoutePath?: string;
  level?: number;
};

const NavItem: React.FC<NavItemProps> = ({
  route,
  parentRoutePath = '.',
  level = 0,
  className,
  ...restProps
}: NavItemProps) => {
  const [isDropDownOpen, setIsDropdownOpen] = React.useState(false);

  if (route.path === undefined) {
    return null;
  }

  const wrappedClassName = 'my-2 inline-block';

  if (route.children && route.children.length > 0) {
    return (
      <div className={wrappedClassName}>
        <button onClick={() => setIsDropdownOpen(!isDropDownOpen)}>
          <span className="mr-1">{isDropDownOpen ? '▼' : '▶'}</span>
          {route.path}
        </button>
        <ul
          className={twMerge(
            clsx(
              {
                ['indent-2']: level === 0,
                ['indent-4']: level === 1,
                ['max-h-0']: !isDropDownOpen,
                ['max-h-screen']: isDropDownOpen,
              },
              'overflow-hidden',
              'duration-200',
            ),
          )}
        >
          {route.children.map((subRoute) => {
            if (subRoute.path === undefined) {
              return null;
            }
            return (
              <li key={subRoute.path}>
                <NavItem
                  parentRoutePath={`${parentRoutePath}/${route.path}`}
                  level={level + 1}
                  route={subRoute}
                  {...restProps}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <NavLink
      className={({ isActive }) =>
        clsx(wrappedClassName, {
          ['text-blue-400']: isActive,
        })
      }
      key={route.path}
      to={`${parentRoutePath}/${route.path}`}
      {...restProps}
    >
      {route.path}
    </NavLink>
  );
};

export default React.memo(NavItem);
