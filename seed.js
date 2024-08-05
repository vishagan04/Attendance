// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Seed data for Employee
  const employees = await prisma.employee.createMany({
    data: [
      { name: 'John Doe', emp_id: 'EMP001', address: '123 Main St', dateOfJoining: new Date('2023-01-15'), mobile: '123-456-7890', email: 'john.doe@example.com' },
      { name: 'Jane Smith', emp_id: 'EMP002', address: '456 Elm St', dateOfJoining: new Date('2022-07-23'), mobile: '987-654-3210', email: 'jane.smith@example.com' },
      { name: 'Emily Davis', emp_id: 'EMP003', address: '789 Maple St', dateOfJoining: new Date('2021-11-30'), mobile: '555-123-4567', email: 'emily.davis@example.com' },
      { name: 'Michael Brown', emp_id: 'EMP004', address: '101 Oak St', dateOfJoining: new Date('2023-03-10'), mobile: '444-555-6789', email: 'michael.brown@example.com' },
      { name: 'Linda Johnson', emp_id: 'EMP005', address: '202 Pine St', dateOfJoining: new Date('2022-12-05'), mobile: '666-777-8888', email: 'linda.johnson@example.com' }
    ]
  });

  console.log('Employees seeded:', employees);

  // Seed data for EmployeeAttendance
  const attendance = await prisma.employeeAttendance.createMany({
    data: [
      { empId: 'EMP001', empName: 'John Doe', checkinTime: new Date('2024-08-01T09:00:00Z'), checkoutTime: new Date('2024-08-01T17:00:00Z'), status: 'Present', date: new Date('2024-08-01') },
      { empId: 'EMP002', empName: 'Jane Smith', checkinTime: new Date('2024-08-01T08:30:00Z'), checkoutTime: new Date('2024-08-01T16:30:00Z'), status: 'Present', date: new Date('2024-08-01') },
      { empId: 'EMP003', empName: 'Emily Davis', checkinTime: new Date('2024-08-01T10:00:00Z'), checkoutTime: new Date('2024-08-01T18:00:00Z'), status: 'Present', date: new Date('2024-08-01') },
      { empId: 'EMP004', empName: 'Michael Brown', checkinTime: new Date('2024-08-01T09:15:00Z'), checkoutTime: new Date('2024-08-01T17:15:00Z'), status: 'Present', date: new Date('2024-08-01') },
      { empId: 'EMP005', empName: 'Linda Johnson', checkinTime: new Date('2024-08-01T09:00:00Z'), checkoutTime: new Date('2024-08-01T17:30:00Z'), status: 'Present', date: new Date('2024-08-01') }
    ]
  });

  console.log('Employee attendance seeded:', attendance);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
