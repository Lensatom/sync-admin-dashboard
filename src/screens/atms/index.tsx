"use client"

import { Card } from "@/components/layout/card";
import { Container } from "@/components/layout/container";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetAtms } from "./api";
import { Loader } from "@/components/ui/loader";
import { formatAmount, formatDate } from "@/helpers";
import { StatusPill } from "@/components/ui/statusPill";

export function Atms() {
  const { atms, isLoading } = useGetAtms()

  console.log('atms:', atms);

  if (isLoading) {
    return <Loader />
  }
  return (
    <>
      <Header
        title="ATMs Overview"
        subtitle="Overview of the ATMs in your bank"
      />
      <Container className='mt-10'>
        <Card className='!p-0'>
          <div className='flex items-start px-6 py-5'>
            <h2 className='text-gray.12 font-medium'>All ATMs (4)</h2>
          </div>

          <Table>
            <TableHeader>
              <TableRow className='px-6 text-xs font-semibold text-gray.12'>
                <TableHead>ATM ID</TableHead>
                <TableHead>Last Heartbeat</TableHead>
                <TableHead>Cash Level</TableHead>
                <TableHead>Amount Inside</TableHead>
                <TableHead>Health Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {atms?.map((item:any) => (
                <TableRow className='px-6' key={item.id}>
                  <TableCell className="font-medium">ATM {item._id?.split("-").at(-1)}</TableCell>
                  <TableCell>{formatDate(item.lastLivenessAt)}, 2025</TableCell>
                  <TableCell>
                    <span className={`${item.totalAmount > 7000000 ? "text-green-600" : "text-red-600"}`}>{item.totalAmount > 7000000 ? "Optimal" : "Low"}</span>
                  </TableCell>
                  <TableCell>{formatAmount(item.totalAmount)}</TableCell>
                  <TableCell>
                    <StatusPill status={item.healthStatus} />
                  </TableCell>
                  <TableCell className="text-right flex items-center gap-3">
                    <Button pill size="sm" variant="outline" className="font-medium">View More</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Container>
    </>
  )
}