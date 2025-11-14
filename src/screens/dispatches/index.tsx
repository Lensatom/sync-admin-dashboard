"use client"

import { Card } from "@/components/layout/card";
import { Container } from "@/components/layout/container";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader } from "@/components/ui/loader";
import { formatAmount, formatDate, getEfficiencyScore } from "@/helpers";
import { StatusPill } from "@/components/ui/statusPill";
import { useGetDispatches } from "./api";

export function Dispatches() {
  const { dispatches, isLoading } = useGetDispatches()

  console.log("dispatches", dispatches)

  if (isLoading) {
    return <Loader />
  }
  return (
    <>
      <Header
        title="Dispatches"
        subtitle="View Engineer dispatches for fixes"
      />
      <Container className='my-10'>
        <Card className='!p-0'>
          <div className='flex items-start px-6 py-5'>
            <h2 className='text-gray.12 font-medium'>All Dispatches (30)</h2>
          </div>

          <Table>
            <TableHeader>
              <TableRow className='px-6 text-xs font-semibold text-gray.12'>
                <TableHead>Engineer Name | Efficiency Score</TableHead>
                <TableHead>ATM ID</TableHead>
                <TableHead>Task Status</TableHead>
                <TableHead>Date Assigned</TableHead>
                <TableHead>Fix Time</TableHead>
                <TableHead>ATM Health Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dispatches?.map((dispatch:any) => (
                <TableRow className='px-6' key={dispatch.id}>
                  <TableCell className="font-medium">{dispatch.assignee?.firstName} {dispatch.assignee?.lastName} | {getEfficiencyScore(dispatch.assignee?.email)}%</TableCell>
                  <TableCell>{dispatch.id.split("-").at(-1)}</TableCell>
                  <TableCell>
                    <span className="capitalize text-gray-600">{dispatch.statusDetails.at(-1)?.status.toLowerCase()}</span>
                  </TableCell>
                  <TableCell>{formatDate(dispatch.createdAt)}, 2025</TableCell>
                  <TableCell>...</TableCell>
                  <TableCell>
                    <StatusPill status={dispatch.atm?.healthStatus} />
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