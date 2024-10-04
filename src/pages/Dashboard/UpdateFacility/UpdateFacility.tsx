/* eslint-disable @typescript-eslint/no-explicit-any */

// import Loading from "@/components/Loading";
// import {
//   useGetSingleFacilityQuery,
//   useUpdateSingleFacilityMutation,
// } from "@/redux/api/facilitesApi/facilitesApi";
// import { useForm } from "react-hook-form";
// import { useParams } from "react-router-dom";
// import Swal from "sweetalert2";

// const UpdateFacility = () => {
//   const { id } = useParams();

//   const { data: facility, isLoading } = useGetSingleFacilityQuery(id);

//   const [UpdateFacility, { isError }] =
//     useUpdateSingleFacilityMutation();

//   const {
//     register,
//     handleSubmit,
//     reset,
//   } = useForm();

//   if (isLoading) {
//     return <Loading />;
//   }
//   const { _id, name } = facility.data;

//   const onSubmit = async (data: any) => {
//     console.log(data);
//     const filteredData: any = {};
//     for (const key in data) {
//       if (data[key] !== undefined && data[key] !== "") {
//         filteredData[key] =
//           key === "pricePerHour" ? Number(data[key]) : data[key];
//       }
//     }
//     console.log(filteredData);
//     const pureData = {
//       id: _id,
//       data: filteredData,
//     };
//     console.log(pureData);

//     const res = await UpdateFacility(pureData);
//     console.log(res);
//     if (res.data) {
//       Swal.fire({
//         icon: "success",
//         title: "success",
//         text: `${res?.data?.message}`,
//         showConfirmButton: false,
//         timer: 1500,
//       });

//       reset();
//     }
//   };

//   if (isError) {
//     Swal.fire({
//       icon: "error",
//       title: "Error",
//       text: "Something is worng Facility Not Update!",
//       showConfirmButton: false,
//       timer: 1500,
//     })
//   }

//   return (
//     <div>
//       <div className="mx-52">
//         <h2></h2>

//         <form className="mx-45" onSubmit={handleSubmit(onSubmit)}>
//           <h1 className="text-[40px] leading-[50px] my-5">
//             Update {name} Facility
//           </h1>
//           <div className="form-control w-full max-w-xs">
//             <label className="label">
//               <span className="label-text text-bold">Name</span>
//             </label>
//             <input
//               {...register("name")}
//               type="name"
//               placeholder=" Facility Name"
//               className="input input-bordered w-full max-w-xs"
//             />

//             {/* <label className="label">
//               {errors.name?.type === "required" && (
//                 <span className="label-text-alt text-red-500">
//                   {errors.name.message}
//                 </span>
//               )}
//             </label> */}
//           </div>
//           <div className="form-control w-full max-w-xs">
//             <label className="label">
//               <span className="label-text text-bold">Description</span>
//             </label>
//             <input
//               {...register("description")}
//               type="text"
//               placeholder="Description"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>

//           <div className="form-control w-full max-w-xs">
//             <label className="label">
//               <span className="label-text text-bold">Price</span>
//             </label>
//             <input
//               {...register("pricePerHour")}
//               type="number"
//               placeholder="pricePerHour"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <div className="form-control w-full max-w-xs">
//             <label className="label">
//               <span className="label-text text-bold">location</span>
//             </label>
//             <input
//               {...register("location")}
//               type="text"
//               placeholder="location"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <div className="form-control w-full max-w-xs">
//             <input
//               className="btn bg-[#9260E2]  text-white w-full max-w-xs mt-5 "
//               type="submit"
//               value="ADD"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateFacility;

import Loading from "@/components/Loading";
import {
  useGetSingleFacilityQuery,
  useUpdateSingleFacilityMutation,
} from "@/redux/api/facilitesApi/facilitesApi";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFacility = () => {
  const { id } = useParams();

  const { data: facility, isLoading } = useGetSingleFacilityQuery(id);
  const [UpdateFacility, { isError }] = useUpdateSingleFacilityMutation();

  const { register, handleSubmit, reset } = useForm();

  if (isLoading) {
    return <Loading />;
  }

  const { _id, name } = facility.data;

  const onSubmit = async (data: any) => {
    console.log(data);
    const filteredData: any = {};
    for (const key in data) {
      if (data[key] !== undefined && data[key] !== "") {
        filteredData[key] =
          key === "pricePerHour" ? Number(data[key]) : data[key];
      }
    }
    console.log(filteredData);
    const pureData = {
      id: _id,
      data: filteredData,
    };
    console.log(pureData);

    const res = await UpdateFacility(pureData);
    console.log(res);
    if (res.data) {
      Swal.fire({
        icon: "success",
        title: "success",
        text: `${res?.data?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });

      reset();
    }
  };
  if (isError) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Something went wrong! Facility not updated.",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Update {name} Facility
      </h1>

      <form
        className="bg-white shadow-md rounded-lg p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Facility Name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <textarea
              {...register("description")}
              placeholder="Description"
              className="textarea textarea-bordered w-full h-24"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Price Per Hour</span>
            </label>
            <input
              {...register("pricePerHour")}
              type="number"
              placeholder="Price Per Hour"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Location</span>
            </label>
            <input
              {...register("location")}
              type="text"
              placeholder="Location"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mt-5">
            <input
              className="btn bg-orange-500 hover:bg-orange-600 text-white w-full"
              type="submit"
              value="Update"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateFacility;
