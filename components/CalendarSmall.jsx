// 'use client'

// import React from 'react'

// import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import { googleCalendarSync, Page, Eventcalendar, getJson, Toast } from '@mobiscroll/react';



// const CalendarSmall = () => {

//     const [myEvents, setEvents] = React.useState([]);
//     const [isToastOpen, setToastOpen] = React.useState(false);
//     const [toastText, setToastText] = React.useState();

//     const firstDay = React.useRef();
//     const lastDay = React.useRef();
    
//     const onError = React.useCallback((resp) => {
//         toast({
//             message: resp.error ? resp.error : resp.result.error.message
//         });
//     }, []);
    
//     const loadEvents = React.useCallback(() => {
//         setLoading(true);
//         googleCalendarSync.getEvents(CALENDAR_ID, firstDay.current, lastDay.current)
//             .then(function (resp) {
//                 setLoading(false);
//                 setEvents(resp);
//             }).catch(onError);
//     }, [firstDay, lastDay, onError]);

//     const onPageLoading = React.useCallback((event) => {
//         const start = event.viewStart;
//         const end = event.viewEnd;
    
//         // Calculate dates 
//         // (pre-load events for previous and next pages as well)
//         if (view === 'month') {
//             firstDay.current = start;
//             lastDay.current = end;
//         } else {
//             firstDay.current = new Date(start.getFullYear(), start.getMonth(), start.getDate() - 7);
//             lastDay.current = new Date(end.getFullYear(), end.getMonth(), end.getDate() + 7);
//         }

//         loadEvents();
//     }, [loadEvents, view]);
    
//     React.useEffect(() => {
//         googleCalendarSync.init({
//             apiKey: '<YOUR_GOOGLE_API_KEY>',
//             onInit: loadEvents
//         });
//     }, [loadEvents]);

//     React.useEffect(() => {
//         getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
//             setEvents(events);
//         }, 'jsonp');
//     }, []);
    
//     const closeToast = React.useCallback(() => {
//         setToastOpen(false);
//     }, []); 
    
//     const onEventClick = React.useCallback((event) => {
//         setToastText(event.event.title);
//         setToastOpen(true);
//     }, []);
    
//     const view = React.useMemo(() => {
//         return {
//             calendar: { type: 'month' },
//             agenda: { type: 'month' }
//         };
//     }, []);

//     return <Page>
//         <Eventcalendar
//             theme="ios" 
//             themeVariant="light"
//             clickToCreate={false}
//             dragToCreate={false}
//             dragToMove={false}
//             dragToResize={false}
//             eventDelete={false}
//             data={myEvents}
//             view={view}
//             onEventClick={onEventClick}
//        />
//         <Toast 
//     		message={toastText}
//     		isOpen={isToastOpen}
//             onClose={closeToast}
//     	/>
//     </Page>
// }
// //   return (
// //     <div className="flex items-center justify-center px-4 py-8">
// //   <div className="w-full max-w-sm shadow-lg">
// //     <div className="p-5 bg-white rounded-t md:p-8 dark:bg-gray-800">
// //       <div className="flex items-center justify-between px-4">
// //         <span
// //           tabIndex={0}
// //           className="text-base font-bold text-gray-800 focus:outline-none dark:text-gray-100"
// //         >
// //           December 2023
// //         </span>
// //         <div className="flex items-center">
// //           <button
// //             aria-label="calendar backward"
// //             className="text-gray-800 focus:text-gray-400 hover:text-gray-400 dark:text-gray-100"
// //           >
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="icon icon-tabler icon-tabler-chevron-left"
// //               width={24}
// //               height={24}
// //               viewBox="0 0 24 24"
// //               strokeWidth="1.5"
// //               stroke="currentColor"
// //               fill="none"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             >
// //               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
// //               <polyline points="15 6 9 12 15 18" />
// //             </svg>
// //           </button>
// //           <button
// //             aria-label="calendar forward"
// //             className="ml-3 text-gray-800 focus:text-gray-400 hover:text-gray-400 dark:text-gray-100"
// //           >
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="icon icon-tabler icon-tabler-chevron-right"
// //               width={24}
// //               height={24}
// //               viewBox="0 0 24 24"
// //               strokeWidth="1.5"
// //               stroke="currentColor"
// //               fill="none"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             >
// //               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
// //               <polyline points="9 6 15 12 9 18" />
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
// //       <div className="flex items-center justify-between pt-12 overflow-x-auto">
// //         <table className="w-full">
// //           <thead>
// //             <tr>
// //               <th>
// //                 <div className="flex justify-center w-full">
// //                   <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
// //                     Mo
// //                   </p>
// //                 </div>
// //               </th>
// //               <th>
// //                 <div className="flex justify-center w-full">
// //                   <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
// //                     Tu
// //                   </p>
// //                 </div>
// //               </th>
// //               <th>
// //                 <div className="flex justify-center w-full">
// //                   <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
// //                     We
// //                   </p>
// //                 </div>
// //               </th>
// //               <th>
// //                 <div className="flex justify-center w-full">
// //                   <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
// //                     Th
// //                   </p>
// //                 </div>
// //               </th>
// //               <th>
// //                 <div className="flex justify-center w-full">
// //                   <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
// //                     Fr
// //                   </p>
// //                 </div>
// //               </th>
// //               <th>
// //                 <div className="flex justify-center w-full">
// //                   <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
// //                     Sa
// //                   </p>
// //                 </div>
// //               </th>
// //               <th>
// //                 <div className="flex justify-center w-full">
// //                   <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
// //                     Su
// //                   </p>
// //                 </div>
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             <tr>
// //               <td className="pt-6">
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer" />
// //               </td>
// //               <td className="pt-6">
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer" />
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer" />
// //               </td>
// //               <td className="pt-6">
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     1
// //                   </p>
// //                 </div>
// //               </td>
// //               <td className="pt-6">
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     2
// //                   </p>
// //                 </div>
// //               </td>
// //               <td className="pt-6">
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base text-gray-500 dark:text-gray-100">
// //                     3
// //                   </p>
// //                 </div>
// //               </td>
// //               <td className="pt-6">
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base text-gray-500 dark:text-gray-100">
// //                     4
// //                   </p>
// //                 </div>
// //               </td>
// //             </tr>
// //             <tr>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     5
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     6
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     7
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="w-full h-full">
// //                   <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
// //                     <a
// //                       role="link"
// //                       tabIndex={0}
// //                       className="flex items-center justify-center w-8 h-8 text-base font-medium text-white bg-indigo-700 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500"
// //                     >
// //                       8
// //                     </a>
// //                   </div>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     9
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base text-gray-500 dark:text-gray-100">
// //                     10
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base text-gray-500 dark:text-gray-100">
// //                     11
// //                   </p>
// //                 </div>
// //               </td>
// //             </tr>
// //             <tr>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     12
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     13
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     14
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     15
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     16
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base text-gray-500 dark:text-gray-100">
// //                     17
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base text-gray-500 dark:text-gray-100">
// //                     18
// //                   </p>
// //                 </div>
// //               </td>
// //             </tr>
// //             <tr>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     19
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     20
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     21
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     22
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     23
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base text-gray-500 dark:text-gray-100">
// //                     24
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base text-gray-500 dark:text-gray-100">
// //                     25
// //                   </p>
// //                 </div>
// //               </td>
// //             </tr>
// //             <tr>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     26
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     27
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     28
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     29
// //                   </p>
// //                 </div>
// //               </td>
// //               <td>
// //                 <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
// //                   <p className="text-base font-medium text-gray-500 dark:text-gray-100">
// //                     30
// //                   </p>
// //                 </div>
// //               </td>
// //             </tr>
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //     <div className="px-5 py-5 rounded-b md:py-8 md:px-16 dark:bg-gray-700 bg-gray-50">
// //       <div className="px-4">
// //         <div className="pb-4 border-b border-gray-400 border-dashed">
// //           <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
// //             9:00 AM
// //           </p>
// //           <a
// //             tabIndex={0}
// //             className="mt-2 text-lg font-medium leading-5 text-gray-800 focus:outline-none dark:text-gray-100"
// //           >
// //             Zoom call with design team
// //           </a>
// //           <p className="pt-2 text-sm leading-none leading-4 text-gray-600 dark:text-gray-300">
// //             Discussion on UX sprint and Wireframe review
// //           </p>
// //         </div>
// //         <div className="pt-5 pb-4 border-b border-gray-400 border-dashed">
// //           <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
// //             10:00 AM
// //           </p>
// //           <a
// //             tabIndex={0}
// //             className="mt-2 text-lg font-medium leading-5 text-gray-800 focus:outline-none dark:text-gray-100"
// //           >
// //             Orientation session with new hires
// //           </a>
// //         </div>
// //         <div className="pt-5 pb-4 border-b border-gray-400 border-dashed">
// //           <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
// //             9:00 AM
// //           </p>
// //           <a
// //             tabIndex={0}
// //             className="mt-2 text-lg font-medium leading-5 text-gray-800 focus:outline-none dark:text-gray-100"
// //           >
// //             Zoom call with design team
// //           </a>
// //           <p className="pt-2 text-sm leading-none leading-4 text-gray-600 dark:text-gray-300">
// //             Discussion on UX sprint and Wireframe review
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // </div>

// //   )
// // }

// export default CalendarSmall