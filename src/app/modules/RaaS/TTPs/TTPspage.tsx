// import {useEffect} from 'react'
// import {useIntl} from 'react-intl'
// import path from 'path'

import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
// import {PageLink} from '../../../../_metronic/layout/core'
import {PageTitle} from '../../../../_metronic/layout/core'

import {ALPHV} from './components/ALPHV'
import {Avoslocker} from './components/Avoslocker'
import {BlackBasta} from './components/BlackBasta'
import {BlackByte} from './components/BlackByte'
import {Blackcat} from './components/Blackcat'
import {Blackmatter} from './components/Blackmatter'
import {Bluesky} from './components/Bluesky'
import {Clop} from './components/Clop'
import {Conti} from './components/Conti'
import {Cuba} from './components/Cuba'
import {Gwisin} from './components/Gwisin'
import {Hive} from './components/Hive'
import {Lockbit} from './components/Lockbit3.0'
import {LV} from './components/LV'
import {Quantum} from './components/Quantum'
import {Ransomexx} from './components/Ransomexx'
import {Vice_Society} from './components/Vice_Society'
import {Yanluowang} from './components/Yanluowang'


// const chatBreadCrumbs: Array<PageLink> = [
//   {
//     title: 'Darkweb INFO',
//     path: '/apps/RaaS/TTPs/Avoslocker',
//     isSeparator: false,
//     isActive: false,
//   },
//   {
//     title: '',
//     path: '',
//     isSeparator: true,
//     isActive: false,
//   },
// ]

const TTPsPage = () => {
  return (
    
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='ALPHV'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <ALPHV className=''/>
            </>
          }
        /> 
        <Route
          path='Avoslocker'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Avoslocker className=''/>
            </>
          }
        />
        <Route
          path='BlackBasta'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <BlackBasta className=''/>
            </>
          }
        />
        <Route
          path='BlackByte'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <BlackByte className=''/>
            </>
          }
        />
        <Route
          path='Blackcat'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Blackcat className=''/>
            </>
          }
        />
        <Route
          path='Blackmatter'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Blackmatter className=''/>
            </>
          }
        />
        <Route
          path='Bluesky'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Bluesky className=''/>
            </>
          }
        />
        <Route
          path='Clop'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Clop className=''/>
            </>
          }
        />
        <Route
          path='Conti'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Conti className=''/>
            </>
          }
        />
        <Route
          path='Cuba'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Cuba className=''/>
            </>
          }
        />
        <Route
          path='Gwisin'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Gwisin className=''/>
            </>
          }
        />
        <Route
          path='Gwisin'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Gwisin className=''/>
            </>
          }
        />
        <Route
          path='Gwisin'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Gwisin className=''/>
            </>
          }
        />
        <Route
          path='Hive'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Hive className=''/>
            </>
          }
        />
        <Route
          path='Lockbit'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Lockbit className=''/>
            </>
          }
        />
        <Route
          path='LV'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <LV className=''/>
            </>
          }
        />
        <Route
          path='Quantum'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Quantum className=''/>
            </>
          }
        />
        <Route
          path='Ransomexx'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Ransomexx className=''/>
            </>
          }
        />
        <Route
          path='Vice_Society'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Vice_Society className=''/>
            </>
          }
        />
        <Route
          path='Yanluowang'
          element={
            <>
              <PageTitle breadcrumbs={[]} description='TTPs'>RaaS Groups</PageTitle>
              <Yanluowang className=''/>
            </>
          }
        />

        <Route index element={<Navigate to='/apps/RaaS/TTPs/Avoslocker' />} />
      </Route>
    </Routes>
  )
}

export default TTPsPage
