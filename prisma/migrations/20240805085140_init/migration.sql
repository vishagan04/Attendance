-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "emp_id" TEXT NOT NULL,
    "address" TEXT,
    "dateOfJoining" TIMESTAMP(3) NOT NULL,
    "mobile" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeAttendance" (
    "id" SERIAL NOT NULL,
    "empId" TEXT NOT NULL,
    "empName" TEXT NOT NULL,
    "checkinTime" TIMESTAMP(3) NOT NULL,
    "checkoutTime" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmployeeAttendance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_emp_id_key" ON "Employee"("emp_id");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");
