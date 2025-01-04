const PaginationControls = () => {
  return (
    <div className="self-stretch px-5 py-1 justify-end items-center gap-16 inline-flex">
      <div className="justify-start items-center gap-2.5 flex">
        <div className="text-[#999999] text-sm font-normal font-bricolage leading-tight">
          Rows per page:
        </div>
        <div className="justify-start items-center gap-2.5 flex">
          <div className="text-white text-sm font-normal font-bricolage leading-tight">
            50
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.66634 5.3335H3.33301V6.66683H4.66634V8.00016H5.99967V9.3335H7.33301V10.6668H8.66634V9.3335H9.99967V8.00016H11.333V6.66683H12.6663V5.3335H11.333V6.66683H9.99967V8.00016H8.66634V9.3335H7.33301V8.00016H5.99967V6.66683H4.66634V5.3335Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="justify-start items-center gap-8 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.667 4.58317L14.667 6.4165L12.8337 6.4165L12.8337 4.58317L14.667 4.58317ZM14.667 17.4165L14.667 15.5832L12.8337 15.5832L12.8337 17.4165L14.667 17.4165ZM11.0003 13.7498L11.0003 15.5832L12.8337 15.5832L12.8337 13.7498L11.0003 13.7498ZM9.16699 11.9165L9.16699 13.7498L11.0003 13.7498L11.0003 11.9165L9.16699 11.9165ZM9.16699 10.0832L7.33366 10.0832L7.33366 11.9165L9.16699 11.9165L9.16699 10.0832ZM11.0003 8.24984L11.0003 10.0832L9.16699 10.0832L9.16699 8.24984L11.0003 8.24984ZM11.0003 8.24984L12.8337 8.24984L12.8337 6.4165L11.0003 6.4165L11.0003 8.24984Z"
            fill="white"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.33301 17.4168L7.33301 15.5835L9.16634 15.5835L9.16634 17.4168L7.33301 17.4168ZM7.33301 4.5835L7.33301 6.41683L9.16634 6.41683L9.16634 4.5835L7.33301 4.5835ZM10.9997 8.25016L10.9997 6.41683L9.16634 6.41683L9.16634 8.25016L10.9997 8.25016ZM12.833 10.0835L12.833 8.25016L10.9997 8.25016L10.9997 10.0835L12.833 10.0835ZM12.833 11.9168L14.6663 11.9168L14.6663 10.0835L12.833 10.0835L12.833 11.9168ZM10.9997 13.7502L10.9997 11.9168L12.833 11.9168L12.833 13.7502L10.9997 13.7502ZM10.9997 13.7502L9.16634 13.7502L9.16634 15.5835L10.9997 15.5835L10.9997 13.7502Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default PaginationControls;
