import {Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() 
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task: string;

  @Column()
  time: Date;
  
}