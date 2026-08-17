// const fetchDoctor = async () => {
    //   try {
    //     const { id } = await params;

    //     // 1. Get JWT token from Better Auth (client side)
    //     const { data: tokenData, error: tokenError } = await authClient.token();

    //     if (tokenError || !tokenData?.token) {
    //       console.error("Failed to get token:", tokenError);
    //       setError("Authentication failed. Please log in again.");
    //       return;
    //     }

    //     const token = tokenData.token;
    //     console.log( token);

    //     // 2. Fetch doctor / appointment data
    //     const res = await fetch(`http://localhost:2000/appointments/${id}`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });

    //     if (!res.ok) throw new Error("Doctor not found");

    //     const doctor = await res.json();
    //     setDoctorData(doctor);
    //   } catch (err) {
    //     console.error(err);
    //     setError(err.message || "Something went wrong");
    //   } finally {
    //     setLoading(false);
    //   }
    // };



    // "use client";
    
    // import React, { useState, useEffect } from "react";
    // import Image from "next/image";
    // import { MdVerified } from "react-icons/md";
    // import { LuInfo } from "react-icons/lu";
    // import { authClient } from "@/lib/auth-client";
    // import { useRouter } from "next/navigation";
    
    // export default function DoctorAppointmentPage({ params }) {
    //   const router = useRouter();
    //   const [doctorData, setDoctorData] = useState(null);
    //   const [loading, setLoading] = useState(true);
    //   const [error, setError] = useState(null);
    //   const [selectedDay, setSelectedDay] = useState(0);
    //   const [selectedTime, setSelectedTime] = useState(null);
    
    //   // --- Static slot data (will come from API later) ---
    //   const days = [
    //     { day: "SAT", date: "15" },
    //     { day: "SUN", date: "16" },
    //     { day: "MON", date: "17" },
    //     { day: "TUE", date: "18" },
    //     { day: "WED", date: "19" },
    //     { day: "THU", date: "20" },
    //   ];
    
    //   // --- Fetch doctor data ---
    //   useEffect(() => {
    //    const fetchDoctor = async () => {
    //       try {
    //         const { id } = await params;
    
    //         // 1. Get JWT token from Better Auth (client side)
    //         const { data: tokenData, error: tokenError } = await authClient.token();
    
    //         if (tokenError || !tokenData?.token) {
    //           console.error("Failed to get token:", tokenError);
    //           setError("Authentication failed. Please log in again.");
    //           return;
    //         }
    
    //         const token = tokenData.token;
    //         console.log( token);
    
    //         // 2. Fetch doctor / appointment data
    //         const res = await fetch(`http://localhost:2000/appointments/${id}`, {
    //           headers: {
    //             Authorization: `Bearer ${token}`,
    //           },
    //         });
    
    //         if (!res.ok) throw new Error("Doctor not found");
    
    //         const doctor = await res.json();
    //         setDoctorData(doctor);
    //       } catch (err) {
    //         console.error(err);
    //         setError(err.message || "Something went wrong");
    //       } finally {
    //         setLoading(false);
    //       }
    //     };
    
    //     fetchDoctor();
    //   }, [params]); // only params is needed
    
    //   const timeSlots = Array.isArray(doctorData?.timeSlots)
    //     ? doctorData.timeSlots
    //     : [
    //         doctorData?.time1,
    //         doctorData?.time2,
    //         doctorData?.time3,
    //         doctorData?.time4,
    //       ].filter(Boolean);
    
    //   // Get signed-in user session
    //   const { data: session } = authClient.useSession();
    //   const user = session?.user;
    
    //   const handleBooking = async () => {
    //     if (!user) {
    //       alert("Please log in to book an appointment.");
    //       return;
    //     }
    
    //     if (selectedDay === null || !selectedTime) {
    //       alert("Please select a day and time slot.");
    //       return;
    //     }
    
    //     const formattedBookingDate = `${days[selectedDay].date} Sep 2026 | ${selectedTime}`;
    
    //     const bookingData = {
    //       userId: user?.id,
    //       userName: user?.name,
    //       doctorId: doctorData._id,
    //       doctorName: doctorData.doctor,
    //       doctorSpeciality: doctorData.speciality,
    //       doctorAddress: doctorData.location,
    //       doctorImage: doctorData.image,
    //       bookingDate: formattedBookingDate,
    //     };
    
    //     try {
    //       const res = await fetch("http://localhost:2000/bookings", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(bookingData),
    //       });
    
    //       const data = await res.json();
    //       console.log("Booking Response:", data);
    
    //       alert(`Booking confirmed for ${formattedBookingDate}`);
    //       router.push("/my-appointments");
    //     } catch (err) {
    //       console.error("Failed to book appointment:", err);
    //       alert("Failed to submit booking. Please try again.");
    //     }
    //   };
    
    //   // --- Loading & error states ---
    //   if (loading) {
    //     return <div className="text-center py-20">Loading doctor details...</div>;
    //   }
    
    //   if (error || !doctorData) {
    //     return (
    //       <div className="text-center py-20 text-red-500">
    //         {error || "Doctor not found."}
    //       </div>
    //     );
    //   }