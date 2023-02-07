import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useMemo, useState } from "react"
import { RxSlash } from 'react-icons/rx'

const defaultGetTextGenerator = (param, query) => null;
const defaultGetDefaultTextGenerator = (path) => path

const generatedRoutes = (pathStr) => {
    const removePathQuery = pathStr.split('?')[0]
    return removePathQuery.split('/').filter(v => v.length > 0)
}

export default function BreadCrumb({
    getTextGenerator = defaultGetTextGenerator,
    getDefaultTextGenerator = defaultGetDefaultTextGenerator
}) {
    const router = useRouter()
    // console.log(router.query)


    const breadcrumbs = useMemo(
        function generatedBreadCrumbs() {
            const asPathNestedRoutes = generatedRoutes(router.asPath)
            const pathnameNestedRoutes = generatedRoutes(router.pathname)

            const crumbList = asPathNestedRoutes.map((subpath, index) => {
                // Pull out and convert "[post_id]" into "post_id"
                const param = pathnameNestedRoutes[index].replace('[', '').replace(']', '')
                console.log(param);

                const href = '/' + asPathNestedRoutes.slice(0, index + 1).join('/')
                return {
                    href,
                    textGenerator: getTextGenerator(router.query),
                    text: getDefaultTextGenerator(subpath, href)
                }
            })

            return [{ href: '/', text: 'Home' }, ...crumbList]

        }, [router.asPath, router.pathname, router.query, getTextGenerator, getDefaultTextGenerator])
    return (
        <nav className="flex flex-row mt-4">
            {breadcrumbs.map((crumb, index) => (
                <Crumb {...crumb} key={index} last={index === breadcrumbs.length - 1} />
            ))}
        </nav>
    )
}

// Each individual "crumb" in the breadcrumbs list
function Crumb({ text: defaultText, textGenerator, href, last = false }) {
    const [text, setText] = useState(defaultText)

    useEffect(() => {
        async () => {
            // If `textGenerator` is nonexistent, then don't do anything
            if (!Boolean(textGenerator)) { return; }
            // Run the text generator and set the text again
            const finalText = await textGenerator();
            setText(finalText);
        }
    }, [textGenerator])

    // The last crumb is rendered as normal text since we are already on the page
    if (last) {
        return <div className="text-gray-400 capitalize">{text}</div>
    }

    // All other crumbs will be rendered as links that can be visited 
    return (
        <Link className="flex items-center" href={href}>
            <div className="text-[#696969] relative transition-all duration-500 
            before:absolute before:bottom-0 before:w-0 before:border-b before:border-gray-400 
            before:transition-all before:duration-500 before:bg-gradient-to-r before:from-gray-400 
            before:via-gray-400 before:to-gray-400 hover:before:w-full flex flex-row gap-10 items-center"
            >
                {text}
            </div>
            <RxSlash className="text-[#696969]" />
        </Link>
    );
}