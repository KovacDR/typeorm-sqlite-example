import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({
        type: 'varchar',
        length: 30,
    })
    title!: string;

    @Column({
        type: 'boolean',
        default: false,
    })
    done!: boolean;

}