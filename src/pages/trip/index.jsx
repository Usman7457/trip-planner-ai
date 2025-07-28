import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { format } from "date-fns";
import { Formik } from "formik";

const Trip = () => {
  const [checkedItems, setCheckedItems] = useState({
    shopping: false,
    historic: false,
    outdoors: true,
    art_cultural: true,
  });

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: checked,
    }));
  };

  const getLabelClass = (key) =>
    `group grow cursor-pointer rounded-lg border border-solid px-2 py-1.5 transition-all ${
      checkedItems[key]
        ? "bg-[#CFFC85] border-primary text-primary md:hover:bg-[#A5D6A7]"
        : "border-gray-200 text-gray-400 hover:bg-gray-50 md:hover:border-gray-300 md:hover:text-gray-600"
    }`;

  const getSvgClass = (key) =>
    `svg-inline--fa mb-0.5 text-base transition-all ${
      checkedItems[key] ? "text-gray-900" : "text-gray-200"
    }`;
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      setOpen(false);
    }
  };

  const toggleDatePicker = () => {
    setOpen(!open);
  };

  const formatDateRange = (start, end) => {
    if (start && end) {
      return `${format(start, "MM/dd/yyyy")} - ${format(end, "MM/dd/yyyy")}`;
    }
    return "Select dates";
  };

  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const [showOptions, setShowOptions] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const handleOptionClick = (cityName) => {
    setSelectedCity(cityName);
    setShowOptions(false);
  };

  const handleInputFocus = () => {
    setShowOptions(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowOptions(false);
    }, 200);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Helmet>
        <title>New Trip - Funadiq Trip Planner</title>
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <main className="mb-12 w-full flex-grow">
          <div className="pt-24">
            <div className="flex w-full items-start justify-end gap-2 px-4 md:px-12">
              <div className="mx-auto">
                <h1 className="mt-5 text-center text-2xl md:mt-12 md:text-3xl">
                  Plan your next adventure
                </h1>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      className="mt-12 flex w-full max-w-xl flex-col gap-8"
                    >
                      <div>
                        <p className="mb-4 text-base md:text-lg">
                          Where do you want to go?
                        </p>
                        <div>
                          <div className="text-base md:text-lg"></div>
                          <div>
                            <div className="relative flex md:gap-3 flex-col items-start gap-2">
                              <div className="relative w-full">
                                <input
                                  className="border border-[#999999] text-lg text-start py-2 px-2 w-full rounded-lg outline-none focus:border-red-400"
                                  id="use-autocomplete-demo"
                                  placeholder="Select a city"
                                  onFocus={handleInputFocus}
                                  onBlur={handleInputBlur}
                                  value={selectedCity}
                                  readOnly
                                />
                                {showOptions && (
                                  <ul
                                    className="absolute z-50 mt-2 w-full rounded-md border border-solid border-gray-300 bg-white py-2"
                                    role="listbox"
                                    id="use-autocomplete-demo-listbox"
                                  >
                                    <li
                                      className="flex cursor-pointer items-center justify-between px-4 py-2 text-start hover:bg-[#f2f2f2]"
                                      onClick={() => handleOptionClick("Mecca")}
                                    >
                                      <div className="flex flex-col">
                                        <span>
                                          <span className="text-red-500"></span>
                                          Mecca
                                        </span>
                                      </div>
                                    </li>
                                    <li
                                      className="flex cursor-pointer items-center justify-between px-4 py-2 text-start hover:bg-[#f2f2f2]"
                                      onClick={() =>
                                        handleOptionClick("Medina")
                                      }
                                    >
                                      <div className="flex flex-col">
                                        <span>
                                          <span className="text-accent-red-2"></span>
                                          Medina
                                        </span>
                                      </div>
                                    </li>
                                    <li
                                      className="flex cursor-pointer items-center justify-between px-4 py-2 text-start hover:bg-[#f2f2f2]"
                                      onClick={() =>
                                        handleOptionClick("Riyadh")
                                      }
                                    >
                                      <div className="flex flex-col">
                                        <span>
                                          <span className="text-accent-red-2"></span>
                                          Riyadh
                                        </span>
                                      </div>
                                    </li>
                                    <li
                                      className="flex cursor-pointer items-center justify-between px-4 py-2 text-start hover:bg-[#f2f2f2]"
                                      onClick={() =>
                                        handleOptionClick("Dammam")
                                      }
                                    >
                                      <div className="flex flex-col">
                                        <span>
                                          <span className="text-accent-red-2"></span>
                                          Dammam
                                        </span>
                                      </div>
                                    </li>
                                    <li
                                      className="flex cursor-pointer items-center justify-between px-4 py-2 text-start hover:bg-[#f2f2f2]"
                                      onClick={() =>
                                        handleOptionClick("Jeddah")
                                      }
                                    >
                                      <div className="flex flex-col">
                                        <span>
                                          <span className="text-accent-red-2"></span>
                                          Jeddah
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                )}
                              </div>
                              <div>
                                <div
                                  className="sm:inline-flex h-fit hover:bg-gray-100 rounded-md py-1.5 px-2 md:px-2.5 flex items-center gap-2 border border-solid bg-white border-gray-300 cursor-pointer group text-sm transition-all md:text-base"
                                  type="button"
                                  aria-haspopup="dialog"
                                  aria-expanded={open}
                                  aria-controls="date-picker-dialog"
                                  onClick={toggleDatePicker}
                                >
                                  <div className="grid h-6 w-6 place-items-center gap-2 rounded-full bg-gray-200 group-hover:bg-gray-300 md:h-7 md:w-7">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      role="img"
                                      className="text-base text-gray-700 iconify iconify--mdi"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"
                                      ></path>
                                    </svg>
                                  </div>
                                  <span className="whitespace-nowrap">
                                    {formatDateRange(startDate, endDate)}
                                  </span>
                                </div>
                                {open && (
                                  <div
                                    id="date-picker-dialog"
                                    className="absolute z-50"
                                  >
                                    <DatePicker
                                      selected={startDate}
                                      onChange={handleDateChange}
                                      startDate={startDate}
                                      endDate={endDate}
                                      selectsRange
                                      inline
                                      onClickOutside={toggleDatePicker}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h2 className="mb-4 w-fit rounded-md text-base transition-all md:text-lg ">
                          Select the kind of activities you want to do
                        </h2>
                        <div className="flex flex-wrap gap-2 md:gap-2">
                          {Object.keys(checkedItems).map((key) => (
                            <label
                              key={key}
                              htmlFor={key}
                              className={getLabelClass(key)}
                            >
                              <div className="flex items-center justify-center gap-1.5">
                                <div className="grid place-items-center">
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon={
                                      key === "shopping"
                                        ? "bag-shopping"
                                        : key === "historic"
                                        ? "book-open-reader"
                                        : key === "outdoors"
                                        ? "cloud-sun"
                                        : "palette"
                                    }
                                    className={getSvgClass(key)}
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox={
                                      key === "shopping"
                                        ? "0 0 448 512"
                                        : key === "historic"
                                        ? "0 0 512 512"
                                        : key === "outdoors"
                                        ? "0 0 640 512"
                                        : "0 0 512 512"
                                    }
                                  >
                                    {/* SVG paths for each icon */}
                                    {key === "shopping" && (
                                      <path
                                        fill="currentColor"
                                        d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                                      />
                                    )}
                                    {key === "historic" && (
                                      <path
                                        fill="currentColor"
                                        d="M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152V512l-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427V224c0-17.7 14.3-32 32-32H62.3c63.6 0 125.6 19.6 177.7 56zm32 264V248c52.1-36.4 114.1-56 177.7-56H480c17.7 0 32 14.3 32 32V427c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"
                                      />
                                    )}
                                    {key === "outdoors" && (
                                      <path
                                        fill="currentColor"
                                        d="M294.2 1.2c5.1 2.1 8.7 6.7 9.6 12.1l14.1 84.7 84.7 14.1c5.4 .9 10 4.5 12.1 9.6s1.5 10.9-1.6 15.4l-38.5 55c-2.2-.1-4.4-.2-6.7-.2c-23.3 0-45.1 6.2-64 17.1l0-1.1c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c8.1 0 15.9-1 23.4-2.9c-36.6 18.1-63.3 53.1-69.8 94.9l-24.4 17c-4.5 3.1-10.3 3.8-15.4 1.6s-8.7-6.7-9.6-12.1L98.1 317.9 13.4 303.8c-5.4-.9-10-4.5-12.1-9.6s-1.5-10.9 1.6-15.4L52.5 208 2.9 137.2c-3.2-4.5-3.8-10.3-1.6-15.4s6.7-8.7 12.1-9.6L98.1 98.1l14.1-84.7c.9-5.4 4.5-10 9.6-12.1s10.9-1.5 15.4 1.6L208 52.5 278.8 2.9c4.5-3.2 10.3-3.8 15.4-1.6zM144 208a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM639.9 431.9c0 44.2-35.8 80-80 80H288c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z"
                                      />
                                    )}
                                    {key === "art_cultural" && (
                                      <path
                                        fill="currentColor"
                                        d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 320c-26.5 0-48-21.5-48-48c0-15.8 7.8-30.5 18.8-39.7c-8.7-14.4-16.5-29.5-22.8-46.2c-9.8-22.6-19.8-41.4-36.2-57.8c-6.7-6.5-14.2-11.5-22.8-11.5c-12.2 0-24.5 6.6-31.4 14.4c-8.1 8.2-14.7 21.5-19.4 32.4c-4.7 10.5-9 21.6-12.5 33.1c-4.4 14.8-6.6 30.2-6.6 45.7c0 26.5 21.5 48 48 48h239.4c26.5 0 48-21.5 48-48s-21.5-48-48-48H416c-26.5 0-48 21.5-48 48zM544 64a64 64 0 1 0 0 128 64 64 0 1 0 0-128z"
                                      />
                                    )}
                                  </svg>
                                </div>
                                <span className="line-clamp-1 text-sm md:text-base capitalize">
                                  {key.replace("_", " ")}
                                </span>
                              </div>
                              <input
                                id={key}
                                className="sr-only h-4 w-4 rounded border-gray-300 pr-3 text-blue-600 ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500"
                                type="checkbox"
                                checked={checkedItems[key]}
                                onChange={handleCheckboxChange}
                              />
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="mb-4 text-base md:text-lg">
                          How many people are going?
                        </p>
                        <div className="relative flex max-h-[53px]">
                          <div className="flex w-full items-center justify-between gap-2 rounded-lg border border-solid border-gray-300 px-4 py-2.5 text-base outline-none">
                            <div className="flex items-center gap-2">
                              <span className="min-w-[40px] rounded-md border border-solid bg-[#CFFC85] bg-primary-green/60 p-1 px-3 text-center text-sm">
                                {count}
                              </span>
                              Person{count !== 1 && "s"}{" "}
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={decrement}
                                className="flex min-w-[42px] items-center justify-center rounded-md border border-solid border-gray-300 p-1 px-3 py-1.5 text-gray-500 transition-colors hover:border-gray-400 md:hover:bg-gray-100 md:hover:text-gray-700"
                              >
                                <p className="mb-[2px] text-xl leading-[15px]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    className="text-xs iconify iconify--majesticons"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 12h14"
                                    ></path>
                                  </svg>
                                </p>
                              </button>
                              <button
                                onClick={increment}
                                className="flex min-w-[42px] items-center justify-center rounded-md border border-solid border-gray-300 p-1 px-3 py-1.5 text-gray-500 transition-colors hover:border-gray-400 md:hover:bg-gray-100 md:hover:text-gray-700"
                              >
                                <p className="mb-[2px] text-xl leading-[15px]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    className="text-xs iconify iconify--majesticons"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 12h7m7 0h-7m0 0V5m0 7v7"
                                    ></path>
                                  </svg>
                                </p>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {count > 1 && (
                        <div>
                          <h2 className="mb-4">Who is traveling with you?</h2>
                          <div className="flex gap-2" role="radiogroup">
                            {count === 2 && (
                              <>
                                <div
                                  className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border border-solid p-2 text-center transition-all ${
                                    selectedOption === "Couple"
                                      ? "border-primary text-primary border-green-200 bg-[#CFFC85] shadow-sm md:hover:bg-[#A5D6A7]"
                                      : "border-gray-300 text-gray-500 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-700"
                                  }`}
                                  role="radio"
                                  aria-checked={selectedOption === "Couple"}
                                  tabIndex={
                                    selectedOption === "Couple" ? "0" : "-1"
                                  }
                                  onClick={() => handleOptionChange("Couple")}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--mdi"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M13.5 20c-6.6-6.1-10-9.2-10-12.9C3.5 4 5.9 1.6 9 1.6c1.7 0 3.4.8 4.5 2.1c1.1-1.3 2.8-2.1 4.5-2.1c3.1 0 5.5 2.4 5.5 5.5c0 3.8-3.4 6.9-10 12.9M12 21.1C5.4 15.2 1.5 11.7 1.5 7v-.6c-.6.9-1 2-1 3.2c0 3.8 3.4 6.9 10 12.8z"
                                    ></path>
                                  </svg>
                                  <span className="text-sm md:text-base">
                                    Couple
                                  </span>
                                </div>
                                <div
                                  className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border border-solid p-2 text-center transition-all ${
                                    selectedOption === "Friends"
                                      ? "border-primary text-primary border-green-200 bg-[#CFFC85] shadow-sm md:hover:bg-[#A5D6A7]"
                                      : "border-gray-300 text-gray-500 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-700"
                                  }`}
                                  role="radio"
                                  aria-checked={selectedOption === "Friends"}
                                  tabIndex={
                                    selectedOption === "Friends" ? "0" : "-1"
                                  }
                                  onClick={() => handleOptionChange("Friends")}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--carbon"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 32 32"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M25 10H7a3.003 3.003 0 0 0-3 3v6a2 2 0 0 0 2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V16h-2v12H8v-9H6v-6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6h-2v9h-4V16h-2v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0 2-2v-6a3.003 3.003 0 0 0-3-3M10 9a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m12 6a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"
                                    ></path>
                                  </svg>
                                  <span className="text-sm md:text-base">
                                    Friends
                                  </span>
                                </div>
                                <div
                                  className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border border-solid p-2 text-center transition-all ${
                                    selectedOption === "Family"
                                      ? "border-primary text-primary border-green-200 bg-[#CFFC85] shadow-sm md:hover:bg-[#A5D6A7]"
                                      : "border-gray-300 text-gray-500 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-700"
                                  }`}
                                  role="radio"
                                  aria-checked={selectedOption === "Family"}
                                  tabIndex={
                                    selectedOption === "Family" ? "0" : "-1"
                                  }
                                  onClick={() => handleOptionChange("Family")}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--material-symbols"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M18 6q-.825 0-1.412-.587T16 4t.588-1.412T18 2t1.413.588T20 4t-.587 1.413T18 6m-1 16v-8q0-1-.513-1.8t-1.312-1.25l.875-2.575q.2-.625.738-1T18 7t1.213.375t.737 1L22.5 16H20v6zm-4.5-10.5q-.625 0-1.062-.437T11 10t.438-1.062T12.5 8.5t1.063.438T14 10t-.437 1.063t-1.063.437M5.5 6q-.825 0-1.412-.587T3.5 4t.588-1.412T5.5 2t1.413.588T7.5 4t-.587 1.413T5.5 6m-2 16v-7H2V9q0-.825.588-1.412T4 7h3q.825 0 1.413.588T9 9v6H7.5v7zm7.5 0v-4h-1v-4q0-.625.438-1.062T11.5 12.5h2q.625 0 1.063.438T15 14v4h-1v4z"
                                    ></path>
                                  </svg>
                                  <span className="text-sm md:text-base">
                                    Family
                                  </span>
                                </div>
                              </>
                            )}

                            {count > 2 && count < 11 && (
                              <>
                                <div
                                  className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border border-solid p-2 text-center transition-all ${
                                    selectedOption === "Friends"
                                      ? "border-primary text-primary border-green-200 bg-[#CFFC85] shadow-sm md:hover:bg-[#A5D6A7]"
                                      : "border-gray-300 text-gray-500 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-700"
                                  }`}
                                  role="radio"
                                  aria-checked={selectedOption === "Friends"}
                                  tabIndex={
                                    selectedOption === "Friends" ? "0" : "-1"
                                  }
                                  onClick={() => handleOptionChange("Friends")}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--carbon"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 32 32"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M25 10H7a3.003 3.003 0 0 0-3 3v6a2 2 0 0 0 2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V16h-2v12H8v-9H6v-6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6h-2v9h-4V16h-2v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0 2-2v-6a3.003 3.003 0 0 0-3-3M10 9a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m12 6a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"
                                    ></path>
                                  </svg>
                                  <span className="text-sm md:text-base">
                                    Friends
                                  </span>
                                </div>
                                <div
                                  className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border border-solid p-2 text-center transition-all ${
                                    selectedOption === "Family"
                                      ? "border-primary text-primary border-green-200 bg-[#CFFC85] shadow-sm md:hover:bg-[#A5D6A7]"
                                      : "border-gray-300 text-gray-500 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-700"
                                  }`}
                                  role="radio"
                                  aria-checked={selectedOption === "Family"}
                                  tabIndex={
                                    selectedOption === "Family" ? "0" : "-1"
                                  }
                                  onClick={() => handleOptionChange("Family")}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--material-symbols"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M18 6q-.825 0-1.412-.587T16 4t.588-1.412T18 2t1.413.588T20 4t-.587 1.413T18 6m-1 16v-8q0-1-.513-1.8t-1.312-1.25l.875-2.575q.2-.625.738-1T18 7t1.213.375t.737 1L22.5 16H20v6zm-4.5-10.5q-.625 0-1.062-.437T11 10t.438-1.062T12.5 8.5t1.063.438T14 10t-.437 1.063t-1.063.437M5.5 6q-.825 0-1.412-.587T3.5 4t.588-1.412T5.5 2t1.413.588T7.5 4t-.587 1.413T5.5 6m-2 16v-7H2V9q0-.825.588-1.412T4 7h3q.825 0 1.413.588T9 9v6H7.5v7zm7.5 0v-4h-1v-4q0-.625.438-1.062T11.5 12.5h2q.625 0 1.063.438T15 14v4h-1v4z"
                                    ></path>
                                  </svg>
                                  <span className="text-sm md:text-base">
                                    Family
                                  </span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )}

                      <div>
                        <div className="">
                          <div className="">
                            <h2 className="flex w-full gap-4 text-center text-2xl font-normal md:text-start md:text-3xl">
                              Meals preferences
                            </h2>
                            <p className="mb-6 text-base text-gray-600 md:mt-5 md:text-start md:text-lg">
                              Select the meals you would like to include in your
                              trip, your budget for it, and the type of food you
                              prefer.
                            </p>

                            <div className="flex flex-col gap-14 my-10">
                              <div className="w-full">
                                <p className="flex w-fit gap-2 text-center text-xl font-medium md:text-start">
                                  Budget level
                                </p>
                                <p className="mt-2 hidden text-base text-gray-600 md:block">
                                  Depending on the budget level, we will select
                                  least or expensive restaurants.
                                </p>

                                <div className="mt-4 flex flex-wrap items-center gap-2">
                                  <label
                                    htmlFor="budget-level-cheap"
                                    className="flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                                  >
                                    <input
                                      id="budget-level-cheap"
                                      name="budgetLevel"
                                      value="cheap"
                                      type="radio"
                                      className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                                    />
                                    <div className="text-start">
                                      <p className="-mb-1">Cheap</p>
                                    </div>
                                    <span className="ml-auto animate-slideUpAndFadeSlow font-bold text-base text-gray-600">
                                      {" "}
                                      ${" "}
                                    </span>
                                  </label>

                                  <label
                                    htmlFor="budget-level-mid"
                                    className="flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                                  >
                                    <input
                                      id="budget-level-mid"
                                      name="budgetLevel"
                                      value="mid"
                                      type="radio"
                                      className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                                    />
                                    <div className="text-start">
                                      <p className="-mb-1">Mid</p>
                                    </div>
                                    <span className="ml-auto animate-slideUpAndFadeSlow font-bold text-base text-gray-600">
                                      {" "}
                                      $${" "}
                                    </span>
                                  </label>

                                  <label
                                    htmlFor="budget-level-high"
                                    className="flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                                  >
                                    <input
                                      id="budget-level-high"
                                      name="budgetLevel"
                                      value="high"
                                      type="radio"
                                      className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                                    />
                                    <div className="text-start">
                                      <p className="-mb-1">High</p>
                                    </div>
                                    <span className="ml-auto animate-slideUpAndFadeSlow font-bold text-base text-gray-600">
                                      {" "}
                                      $$${" "}
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col gap-14 my-10">
                              <div className="w-full">
                                <p className="flex w-fit gap-2 text-center text-xl font-medium md:text-start">
                                  Meals to include
                                  <button
                                    className="-mt-0.5 md:hidden grid h-7 w-7 place-items-center rounded-full border border-solid border-gray-200 bg-gray-50 text-sm"
                                    aria-label="Update dimensions"
                                    type="button"
                                    aria-haspopup="dialog"
                                    aria-expanded="false"
                                    aria-controls="radix-:re:"
                                    data-state="closed"
                                    trigger="[object Object]"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      role="img"
                                      className="mb-0.5 iconify iconify--material-symbols"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M12 7q-.825 0-1.412-.587T10 5t.588-1.412T12 3t1.413.588T14 5t-.587 1.413T12 7m0 14q-.625 0-1.062-.437T10.5 19.5v-9q0-.625.438-1.062T12 9t1.063.438t.437 1.062v9q0 .625-.437 1.063T12 21"
                                      ></path>
                                    </svg>
                                  </button>
                                </p>
                                <p className="mt-2 hidden text-base text-gray-600 md:block">
                                  Prices are an estimate of each meal for{" "}
                                  <span className="font-bold">
                                    2 days 2 people
                                  </span>
                                </p>
                                <div className="mt-4 flex flex-wrap items-center gap-2">
                                  <label
                                    htmlFor="food-preference-breakfast"
                                    className="flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                                  >
                                    <input
                                      id="food-preference-breakfast"
                                      className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                                      type="checkbox"
                                    />
                                    <div className="text-start">
                                      <p className="-mb-1">Breakfast</p>
                                      <span className="whitespace-nowrap text-sm font-semibold text-black">
                                        SAR 60 / day
                                      </span>
                                    </div>
                                  </label>
                                  <label
                                    htmlFor="food-preference-lunch"
                                    className="flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                                  >
                                    <input
                                      id="food-preference-lunch"
                                      className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                                      type="checkbox"
                                    />
                                    <div className="text-start">
                                      <p className="-mb-1">Lunch</p>
                                      <span className="whitespace-nowrap text-sm font-semibold text-black">
                                        SAR 120 / day
                                      </span>
                                    </div>
                                  </label>
                                  <label
                                    htmlFor="food-preference-dinner"
                                    className="flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                                  >
                                    <input
                                      id="food-preference-dinner"
                                      className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                                      type="checkbox"
                                    />
                                    <div className="text-start">
                                      <p className="-mb-1">Dinner</p>
                                      <span className="whitespace-nowrap text-sm font-semibold text-black">
                                        SAR 180 / day
                                      </span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col gap-14 my-10">
                              <div className="w-full">
                                <p className="flex w-fit gap-2 text-center text-xl font-medium md:text-start">
                                  Type of food
                                </p>
                                <div className="mt-4 flex flex-wrap items-center gap-2">
                                  <label
                                    htmlFor="food-preference-everything"
                                    className="pb-3 flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                                  >
                                    <input
                                      id="food-preference-everything"
                                      name="foodType"
                                      value="everything"
                                      type="radio"
                                      className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                                    />
                                    <div className="text-start">
                                      <p className="-mb-1">Everything</p>
                                    </div>
                                  </label>

                                  <label
                                    htmlFor="food-preference-vegetarian"
                                    className="pb-3 flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                                  >
                                    <input
                                      id="food-preference-vegetarian"
                                      name="foodType"
                                      value="vegetarian"
                                      type="radio"
                                      className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                                    />
                                    <div className="text-start">
                                      <p className="-mb-1">Vegetarian</p>
                                    </div>
                                  </label>

                                  <label
                                    htmlFor="food-preference-vegan"
                                    className="pb-3 flex w-full flex-1 cursor-pointer gap-2 rounded-md border border-solid border-gray-300 px-2 py-2 pr-3 hover:border-gray-400 enabled:hover:shadow-md md:max-w-[15rem]"
                                  >
                                    <input
                                      id="food-preference-vegan"
                                      name="foodType"
                                      value="vegan"
                                      type="radio"
                                      className="mt-1 h-4 w-4 cursor-pointer rounded-sm border border-solid border-gray-300 bg-gray-100 text-black hover:border-gray-400 hover:bg-gray-300 focus:ring-2 focus:ring-black"
                                    />
                                    <div className="text-start">
                                      <p className="-mb-1">Vegan</p>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="-mt-8">
                        <div className="flex items-center justify-center">
                          <Link
                            type="submit"
                            to="/final-trip"
                            className="my-2 w-fit items-center rounded-full bg-green-800 px-6 py-2 text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
                          >
                            Create New Trip
                          </Link>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
                <p className="mt-8 text-center text-sm text-gray-600 opacity-75">
                  By clicking Create New Trip, you agree to our{" "}
                  <Link className="text-red-500 hover:underline" to="/terms">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link className="text-red-500 hover:underline" to="/privacy">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Trip;
