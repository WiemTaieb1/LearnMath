import { ComponentType, Suspense } from "react"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Loader, PageLayout } from "./components"
import { ROUTES } from "./config"
import { Courses } from "./pages/Courses"
import { Exercies } from "./pages/Exercices"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/home"
import { Exercie } from "./pages/Exercice"
import ParentPortal from "./pages/ParentPortal/ParentPortal"
import { ExercicesList } from "./pages/ExercicesList"
import { CoursesList } from "./pages/CoursesList"

export const AppRoutes = () => {
    const pageLayout = (Component: ComponentType) => <PageLayout>
        <Suspense fallback={<Loader />}>{Component && <Component />}</Suspense>
    </PageLayout>
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/${ROUTES.home}`} element={pageLayout(Home)}></Route>
                <Route path={`/${ROUTES.contact}`} element={pageLayout(Contact)}></Route>
                <Route path={`/${ROUTES.parentPortal}`} element={pageLayout(ParentPortal)}></Route>
                <Route path={`/${ROUTES.courses}`} element={pageLayout(Courses)}></Route>
                <Route path={`/${ROUTES.courses}/${ROUTES.grade}/:id`} element={pageLayout(CoursesList)}></Route>
                <Route path={`/${ROUTES.courses}/${ROUTES.grade}/:id/${ROUTES.course}/:courseId`} element={pageLayout(() => <></>)}></Route>
                <Route path={`/${ROUTES.exercices}`} element={pageLayout(Exercies)}></Route>
                <Route path={`/${ROUTES.exercices}/${ROUTES.grade}/:id`} element={pageLayout(ExercicesList)}></Route>
                <Route path={`/${ROUTES.exercices}/${ROUTES.grade}/:id/${ROUTES.exercice}/:exerciceId`} element={pageLayout(Exercie)}></Route>
            </Routes>
        </BrowserRouter>)
}